
// import { useState } from "react";
// import axios from "axios";

// const Login = ({ setIsLoginOpen, onLoginSuccess }) => {
//   const [step, setStep] = useState("mobile"); // "mobile", "register", "otp"
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Check Mobile Number
//   const handleCheckMobile = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await axios.post("http://localhost:5000/api/auth/check-mobile", { mobile });
//       if (response.data.exists) {
//         setStep("otp");
//         handleSendOtp();
//       } else {
//         setStep("register");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Send OTP
//   const handleSendOtp = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await axios.post("http://localhost:5000/api/auth/send-otp", { mobile, name, email });
//       if (response.data.success) {
//         setStep("otp");
//       } else {
//         setError("Failed to send OTP");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP
//   const handleVerifyOtp = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/verify-otp",
//         { mobile, otp },
//         { withCredentials: true }
//       );
//       if (response.data.success) {
//         alert("Login Successful!");
//         // Assuming the API returns user data (e.g., name) in the response
//         const userName = response.data.user?.name || "User"; // Adjust based on your API response
//         onLoginSuccess(userName); // Pass the user's name to Navbar
//       } else {
//         setError("Invalid OTP, try again!");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-2 text-gray-600"
//           onClick={() => setIsLoginOpen(false)}
//         >
//           ✖
//         </button>

//         {/* Title */}
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           {step === "mobile" ? "Login" : step === "otp" ? "Enter OTP" : "Register"}
//         </h2>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

//         {/* Step: Enter Mobile */}
//         {step === "mobile" && (
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Mobile Number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//             <button
//               onClick={handleCheckMobile}
//               className="bg-amber-600 text-white px-4 py-2 rounded mt-3 w-full"
//               disabled={loading}
//             >
//               {loading ? "Checking..." : "Next"}
//             </button>
//           </div>
//         )}

//         {/* Step: Register User (New User) */}
//         {step === "register" && (
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded mb-2"
//             />
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded mb-2"
//             />
//             <button
//               onClick={handleSendOtp}
//               className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//               disabled={loading}
//             >
//               {loading ? "Registering..." : "Register & Get OTP"}
//             </button>
//           </div>
//         )}

//         {/* Step: Enter OTP */}
//         {step === "otp" && (
//           <div>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="bg-green-500 text-white px-4 py-2 rounded mt-3 w-full"
//               disabled={loading}
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;




// import { useState } from "react";
// import axios from "axios";

// const Login = ({ setIsLoginOpen, onLoginSuccess }) => {
//   const [step, setStep] = useState("mobile"); // "mobile", "register", "otp"
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Check Mobile Number
//   const handleCheckMobile = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await axios.post("http://localhost:5000/api/auth/check-mobile", { mobile });
//       if (response.data.exists) {
//         setStep("otp");
//         handleSendOtp();
//       } else {
//         setStep("register");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Send OTP
//   const handleSendOtp = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await axios.post("http://localhost:5000/api/auth/send-otp", { mobile, name, email });
//       if (response.data.success) {
//         setStep("otp");
//       } else {
//         setError("Failed to send OTP");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP
//   const handleVerifyOtp = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/verify-otp",
//         { mobile, otp },
//         { withCredentials: true }
//       );
//       if (response.data.success) {
//         alert("Login Successful!");
//         // Assuming the API returns user data (e.g., name) in the response
//         const userName = response.data.user?.name || "User"; // Adjust based on your API response
//         onLoginSuccess(userName); // Pass the user's name to Navbar
//       } else {
//         setError("Invalid OTP, try again!");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-2 text-gray-600"
//           onClick={() => setIsLoginOpen(false)}
//         >
//           ✖
//         </button>

//         {/* Title */}
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           {step === "mobile" ? "Login" : step === "otp" ? "Enter OTP" : "Register"}
//         </h2>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

//         {/* Step: Enter Mobile */}
//         {step === "mobile" && (
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Mobile Number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//             <button
//               onClick={handleCheckMobile}
//               className="bg-amber-600 text-white px-4 py-2 rounded mt-3 w-full"
//               disabled={loading}
//             >
//               {loading ? "Checking..." : "Next"}
//             </button>
//           </div>
//         )}

//         {/* Step: Register User (New User) */}
//         {step === "register" && (
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded mb-2"
//             />
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded mb-2"
//             />
//             <button
//               onClick={handleSendOtp}
//               className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//               disabled={loading}
//             >
//               {loading ? "Registering..." : "Register & Get OTP"}
//             </button>
//           </div>
//         )}

//         {/* Step: Enter OTP */}
//         {step === "otp" && (
//           <div>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="bg-green-500 text-white px-4 py-2 rounded mt-3 w-full"
//               disabled={loading}
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import axios from "axios";

const Login = ({ setIsLoginOpen, onLoginSuccess }) => {
  const [step, setStep] = useState("mobile"); // "mobile", "register", "otp"
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check Mobile Number
  const handleCheckMobile = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post("http://localhost:5000/api/auth/check-mobile", { mobile });
      if (response.data.exists) {
        setStep("otp");
        handleSendOtp();
      } else {
        setStep("register");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Send OTP
  const handleSendOtp = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post("http://localhost:5000/api/auth/send-otp", { mobile, name, email });
      if (response.data.success) {
        setStep("otp");
      } else {
        setError("Failed to send OTP");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { mobile, otp },
        { withCredentials: true }
      );
      if (response.data.success) {
        alert("Login Successful!");
        const userName = response.data.user?.name || "User"; // Adjust based on API response
        onLoginSuccess(userName); // Pass user name to Navbar
      } else {
        setError("Invalid OTP, try again!");
      }
    } catch (error) {
      setError(error.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={() => setIsLoginOpen(false)}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">
          {step === "mobile" ? "Login" : step === "otp" ? "Enter OTP" : "Register"}
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        {/* Step: Enter Mobile */}
        {step === "mobile" && (
          <div>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleCheckMobile}
              className="bg-amber-600 text-white px-4 py-2 rounded mt-3 w-full"
              disabled={loading}
            >
              {loading ? "Checking..." : "Next"}
            </button>
          </div>
        )}

        {/* Step: Register User (New User) */}
        {step === "register" && (
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={handleSendOtp}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register & Get OTP"}
            </button>
          </div>
        )}

        {/* Step: Enter OTP */}
        {step === "otp" && (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleVerifyOtp}
              className="bg-green-500 text-white px-4 py-2 rounded mt-3 w-full"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;