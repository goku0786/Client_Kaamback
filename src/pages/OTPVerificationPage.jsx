import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { email, handleOtpSuccess, redirectPath } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // if (!isVerifiedForOtp) {
  //   navigate("/");
  // }

  async function verifyOtp() {
    if (otp === "") {
      setError("Please enter the OTP");
      return;
    }

    try {
      const verifyOtpUrl = `api/auth/verify-otp`;
      let result = await fetch(verifyOtpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      result = await result.json();
      console.log("result", result);

      if (result.success === true) {
        setSuccess(true);
        setError(null);
        handleOtpSuccess();
        navigate(redirectPath); // Navigate based on redirectPath set in AuthContext
      } else {
        setError("Wrong OTP. Please try again.");
        setSuccess(false);
      }
    } catch (err) {
      console.log("Error while verifying OTP", err);
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="font-bold">OTP Verification</h1>
        <section className="flex flex-col w-full">
          <label htmlFor="otp" className="font-semibold text-md">
            OTP
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP sent to your email"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
        </section>
        <button
          onClick={verifyOtp}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-8 mt-4 text-white font-semibold rounded-full"
        >
          Verify OTP
        </button>
        {success && <p className="text-green-500">Verification Successful</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default OTPVerification;
