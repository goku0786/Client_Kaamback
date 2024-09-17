import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSetPassword = async (event) => {
    event.preventDefault();
    if (!password || !confirmPassword) {
      setError("Please fill in both fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setError(null);
      const response = await fetch("/api/auth/set-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();

      if (result.success===true) {
        setSuccess("Password has been reset successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setError(result.message || "Failed to reset password");
      }
    } catch (err) {
      console.error("Error during password reset:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Set New Password</h1>
        <form onSubmit={handleSetPassword} className="flex flex-col w-full">
          <label htmlFor="password" className="font-semibold text-md">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your new password"
            className="outline-none border-b-[2px] pb-1 mb-3 mt-1 text-sm border-gray-300"
          />
          <label htmlFor="confirmPassword" className="font-semibold text-md">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
            className="outline-none border-b-[2px] pb-1 mb-3 mt-1 text-sm border-gray-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-4 mt-4 text-white font-semibold rounded-full"
          >
            Set Password
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default SetPasswordPage;
