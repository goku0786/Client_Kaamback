import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    try {
      setError(null);
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (result.success===true) {
        setMessage("OTP sent. Redirecting to verification...");
        navigate("/otp-verification");
      } else {
        setError(result.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error during password reset:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleForgotPassword} className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-md">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="outline-none border-b-[2px] pb-1 mb-3 mt-1 text-sm border-gray-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-4 mt-4 text-white font-semibold rounded-full"
          >
            Send OTP
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {message && <p className="text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
