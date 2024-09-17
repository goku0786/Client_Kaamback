import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignupPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState(null);
  const { handleSignupSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

  async function signUp(event) {
    event.preventDefault();
    if (!name || !password || !confirmPassword || !email || !dob) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    try {
      let item = { name, password, email, dateOfBirth: dob };
      console.log(item);
      setError(null);

      const signUpUrl = "/api/auth/signup";
      let result = await fetch(signUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();

      console.log("result", result);

      if (result.success) {
        handleSignupSuccess(email);
        navigate("/otp-verification");
      } else {
        setError("Email should be unique");
      }
    } catch (err) {
      console.log("Error while fetching SignUp API", err);
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Sign Up</h1>
        <section className="flex flex-col w-full">
          <label htmlFor="name" className="font-semibold text-md">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
        </section>
        <section className="flex flex-col w-full">
          <label htmlFor="password" className="font-semibold text-md">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
        </section>
        <section className="flex flex-col w-full">
          <label htmlFor="confirmPassword" className="font-semibold text-md">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
        </section>
        <section className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-md">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
        </section>
        <section className="flex flex-col w-full">
          <label htmlFor="dob" className="font-semibold text-md">
            Date Of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
        </section>
        <button
          onClick={signUp}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-8 mt-4 text-white font-semibold rounded-full"
        >
          Register
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
