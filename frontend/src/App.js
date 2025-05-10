// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
// import Login from "./components/Login";

// const App = () => {
//   return (
//     <>
//       <Navbar /> {/* ✅ Navbar stays outside <Routes> */}
//       <Routes>
        
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
        
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";

const AppContent = () => {
  const location = useLocation(); // Get current location

  return (
    <>
      <Navbar currentPath={location.pathname} /> {/* Pass current path to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;