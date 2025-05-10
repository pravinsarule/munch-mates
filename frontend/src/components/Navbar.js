


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaBars, FaTimes } from "react-icons/fa";
// import Login from "./Login";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <nav className="bg-gray-50/90 shadow-md p-4 fixed w-full top-0 z-50 border-b border-gray-200 backdrop-blur-md">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-extrabold text-amber-600 flex items-center">
//             <span className="mr-2 animate-pulse"></span> MunchMates
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-700 hover:text-amber-600 text-2xl transition-transform duration-300 transform hover:scale-110"
//             onClick={toggleMenu}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Navigation Links */}
//           <ul
//             className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-50/95 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out ${
//               menuOpen ? "block shadow-lg" : "hidden lg:flex"
//             }`}
//           >
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)} // Close menu on link click
//               >
//                 Home
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/menu"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Menu
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             {/* Login Button for Mobile */}
//             <li className="lg:hidden">
//               <button
//                 onClick={() => {
//                   setIsLoginOpen(true);
//                   setMenuOpen(false); // Close menu on login click
//                 }}
//                 className="block w-full text-left py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300"
//               >
//                 Login
//               </button>
//             </li>
//           </ul>

//           {/* Login Button for Desktop */}
//           <button
//             onClick={() => setIsLoginOpen(true)}
//             className="hidden lg:flex items-center px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//           >
//             <FaUser className="mr-2" /> Login
//           </button>
//         </div>
//       </nav>

//       {/* Login Popup */}
//       {isLoginOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <Login setIsLoginOpen={setIsLoginOpen} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;




// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
// import Login from "./Login";
// import axios from "axios"; // Added for logout API call

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState(""); // Store user's name
//   const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Callback to handle successful login
//   const handleLoginSuccess = (name) => {
//     setIsLoggedIn(true);
//     setUserName(name); // Set user's name from Login component
//     setIsLoginOpen(false);
//   };

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
//       setIsLoggedIn(false);
//       setUserName("");
//       setDropdownOpen(false);
//       alert("Logged out successfully");
//     } catch (error) {
//       alert("Logout failed. Try again.");
//     }
//   };

//   return (
//     <>
//       <nav className="bg-gray-50/90 shadow-md p-4 fixed w-full top-0 z-50 border-b border-gray-200 backdrop-blur-md">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-extrabold text-amber-600 flex items-center">
//             <span className="mr-2 animate-pulse"></span> MunchMates
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-700 hover:text-amber-600 text-2xl transition-transform duration-300 transform hover:scale-110"
//             onClick={toggleMenu}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Navigation Links */}
//           <ul
//             className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-50/95 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out ${
//               menuOpen ? "block shadow-lg" : "hidden lg:flex"
//             }`}
//           >
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/menu"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Menu
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             {/* Conditional Login/Profile for Mobile */}
//             <li className="lg:hidden">
//               {isLoggedIn ? (
//                 <div className="relative">
//                   <button
//                     onClick={toggleDropdown}
//                     className="block w-full text-left py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 flex items-center"
//                   >
//                     <FaUser className="mr-2" /> {userName || "Profile"}
//                   </button>
//                   {dropdownOpen && (
//                     <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-100 flex items-center"
//                       >
//                         <FaSignOutAlt className="mr-2" /> Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => {
//                     setIsLoginOpen(true);
//                     setMenuOpen(false);
//                   }}
//                   className="block w-full text-left py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300"
//                 >
//                   Login
//                 </button>
//               )}
//             </li>
//           </ul>

//           {/* Conditional Login/Profile for Desktop */}
//           {isLoggedIn ? (
//             <div className="hidden lg:block relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//               >
//                 <FaUser className="mr-2" /> {userName || "Profile"}
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-100 flex items-center"
//                   >
//                     <FaSignOutAlt className="mr-2" /> Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               onClick={() => setIsLoginOpen(true)}
//               className="hidden lg:flex items-center px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//             >
//               <FaUser className="mr-2" /> Login
//             </button>
//           )}
//         </div>
//       </nav>

//       {/* Login Popup */}
//       {isLoginOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <Login setIsLoginOpen={setIsLoginOpen} onLoginSuccess={handleLoginSuccess} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react"; // Added useEffect
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Login from "./Login";
import axios from "axios";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserName = localStorage.getItem("userName");
    if (storedLoggedIn && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Callback to handle successful login
  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    setIsLoginOpen(false);
    // Persist login state in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      setIsLoggedIn(false);
      setUserName("");
      setDropdownOpen(false);
      // Clear persisted data
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      alert("Logged out successfully");
    } catch (error) {
      alert("Logout failed. Try again.");
    }
  };

  return (
    <>
      <nav className="bg-gray-50/90 shadow-md p-4 fixed w-full top-0 z-50 border-b border-gray-200 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-amber-600 flex items-center">
            <span className="mr-2 animate-pulse"></span> MunchMates
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-amber-600 text-2xl transition-transform duration-300 transform hover:scale-110"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-50/95 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "block shadow-lg" : "hidden lg:flex"
            }`}
          >
            <li>
              <Link
                to="/"
                className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
                onClick={() => setMenuOpen(false)}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
                onClick={() => setMenuOpen(false)}
              >
                Menu
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
                onClick={() => setMenuOpen(false)}
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 relative group"
                onClick={() => setMenuOpen(false)}
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* Conditional Login/Profile for Mobile */}
            <li className="lg:hidden">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="block w-full text-left py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300 flex items-center"
                  >
                    <FaUser className="mr-2" /> {userName || "Profile"}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-100 flex items-center"
                      >
                        <FaSignOutAlt className="mr-2" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 font-medium hover:text-amber-600 transition duration-300"
                >
                  Login
                </button>
              )}
            </li>
          </ul>

          {/* Conditional Login/Profile for Desktop */}
          {isLoggedIn ? (
            <div className="hidden lg:block relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FaUser className="mr-2" /> {userName || "Profile"}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-100 flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hidden lg:flex items-center px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <FaUser className="mr-2" /> Login
            </button>
          )}
        </div>
      </nav>

      {/* Login Popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Login setIsLoginOpen={setIsLoginOpen} onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </>
  );
};

export default Navbar;