


// import { useState } from "react";

// const LoginSignupModal = ({ setIsModalOpen }) => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white w-96 p-6 rounded-lg relative shadow-lg">
//         {/* Close Button */}
//         <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-xl">
//           ✖
//         </button>

//         {/* Toggle between Login & Signup */}
//         <h2 className="text-2xl font-bold mb-4">{isLogin ? "LOGIN" : "REGISTER"}</h2>

//         {/* Form */}
//         <form>
//           {!isLogin && (
//             <>
//               <input type="text" placeholder="First Name" className="w-full p-2 border rounded mb-2" />
//               <input type="text" placeholder="Last Name" className="w-full p-2 border rounded mb-2" />
//             </>
//           )}
//           <input type="email" placeholder="Email *" className="w-full p-2 border rounded mb-2" required />
//           <input type="password" placeholder="Password *" className="w-full p-2 border rounded mb-2" required />

//           {isLogin && <p className="text-sm text-blue-600 cursor-pointer">Forgot your password?</p>}

//           <button className="w-full bg-yellow-600 text-white p-2 mt-4 rounded font-bold">
//             {isLogin ? "Sign In" : "Register"}
//           </button>
//         </form>

//         {/* Toggle Login/Signup */}
//         <p className="mt-4 text-center text-sm cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "New customer? Create your account" : "Already have an account? Login here"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupModal;
