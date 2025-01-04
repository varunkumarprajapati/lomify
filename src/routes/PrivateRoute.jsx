import { Navigate, Outlet } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { useFetchUserQuery } from "../store";

export default function PrivateRoute() {
  const { isLoading, isSuccess } = useFetchUserQuery();
  if (isLoading) return <LoadingPage />;
  return <>{isSuccess ? <Outlet /> : <Navigate to="/login" />}</>;
}
