import { Navigate, Outlet } from "react-router-dom";
import { useFetchUserQuery } from "../store";
import LoadingPage from "../pages/LoadingPage";

export default function PublicRoute() {
  const { isLoading, isSuccess } = useFetchUserQuery();

  if (isLoading) return <LoadingPage />;

  // If user is logged in, redirect to dashboard/chat page
  return <>{isSuccess ? <Navigate to="/" /> : <Outlet />}</>;
}
