import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import SetPasswordPage from "./pages/SetPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import HiringProcess from "./pages/Hiring/HiringProcess";
import ApplicationReview from "./pages/Hiring/ApplicationReview";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/otp-verification" element={<PrivateRoute element={OTPVerificationPage} />} />
          <Route path="/set-password" element={<PrivateRoute element={SetPasswordPage} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<HiringProcess />} />
          {/* <Route path="/" element={<ApplicationReview />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

