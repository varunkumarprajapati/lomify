import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";

import { PropsProvider } from "./context/PropsContext";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <Routes>
        <Route
          path="/"
          element={
            <PropsProvider>
              <MainPage />
            </PropsProvider>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
