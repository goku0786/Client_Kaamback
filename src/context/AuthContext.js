// import React, { createContext, useState } from 'react';

// // Create AuthContext
// export const AuthContext = createContext();

// // AuthProvider component to wrap around the app
// export const AuthProvider = ({ children }) => {
//   const [isVerifiedForOtp, setIsVerifiedForOtp] = useState(false);
//   const [email, setEmail] = useState(null);

//   // Function to handle signup success
//   const handleSignupSuccess = (userEmail) => {
//     setEmail(userEmail);
//     setIsVerifiedForOtp(true);
//   };

//   // Function to reset verification after successful OTP
//   const handleOtpSuccess = () => {
//     setIsVerifiedForOtp(false);
//     setEmail(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isVerifiedForOtp,
//         email,
//         handleSignupSuccess,
//         handleOtpSuccess,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isVerifiedForOtp, setIsVerifiedForOtp] = useState(false);
  const [email, setEmail] = useState(null);
  const [redirectPath, setRedirectPath] = useState("/"); // Default to home

  // Function to handle signup success
  const handleSignupSuccess = (userEmail) => {
    setEmail(userEmail);
    setIsVerifiedForOtp(true);
    setRedirectPath("/"); // Redirect to home after signup verification
  };

  // Function to handle forgot password success
  const handleForgotPasswordSuccess = (userEmail) => {
    setEmail(userEmail);
    setIsVerifiedForOtp(true);
    setRedirectPath("/set-password"); // Redirect to set password after forgot password verification
  };

  // Function to reset verification and redirect path after successful OTP
  const handleOtpSuccess = () => {
    setIsVerifiedForOtp(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isVerifiedForOtp,
        email,
        redirectPath,
        handleSignupSuccess,
        handleForgotPasswordSuccess,
        handleOtpSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};




