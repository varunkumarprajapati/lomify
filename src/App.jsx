import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";

import {
  LoginPage,
  MainPage,
  SignupPage,
  VerifyEmailPage,
  ForgotPasswordPage,
} from "./pages";

import PrivateRoute from "./routes/PrivateRoute";
import { PropsProvider } from "./context/PropsContext";
import { ChatRoomProvider } from "./context/ChatRoomContext";

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
        <Route path="/" element={<PrivateRoute />}>
          <Route
            index
            element={
              <PropsProvider>
                <ChatRoomProvider>
                  <MainPage />
                </ChatRoomProvider>
              </PropsProvider>
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
