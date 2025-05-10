const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>
      
      <p className="text-gray-600 text-lg leading-relaxed text-center">
        MunchMates is your one-stop solution for seamless catering services. 
        We provide fresh, high-quality food for all occasions, ensuring an unforgettable dining experience.
      </p>

      {/* Mission Section */}
      <div className="mt-8 bg-yellow-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Mission</h2>
        <p className="text-gray-700 text-lg text-center mt-2">
          To bring people together through great food and exceptional service. 
          We believe in making every meal a delightful experience with our expert catering solutions.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-6">
        <img 
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
          alt="About us" 
          className="rounded-lg shadow-md w-full max-w-lg"
        />
      </div>

      {/* Team Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Founder" 
              className="w-24 h-24 mx-auto rounded-full shadow-md"
            />
            <h3 className="text-lg font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Head Chef" 
              className="w-24 h-24 mx-auto rounded-full shadow-md"
            />
            <h3 className="text-lg font-bold mt-2">Emily Smith</h3>
            <p className="text-gray-500">Head Chef</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img 
              src="https://randomuser.me/api/portraits/men/50.jpg" 
              alt="Event Manager" 
              className="w-24 h-24 mx-auto rounded-full shadow-md"
            />
            <h3 className="text-lg font-bold mt-2">Michael Brown</h3>
            <p className="text-gray-500">Event Manager</p>
          </div>
        </div>
      </div>

      {/* Customer Review Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">What Our Customers Say</h2>
        <p className="text-gray-700 text-lg text-center mt-2 italic">
          "MunchMates made our wedding unforgettable with their outstanding catering service! Highly recommended!"
        </p>
        <p className="text-gray-600 text-center mt-2">- Sarah & Daniel</p>
      </div>
    </div>
  );
};

export default About;




// const About = () => {
//     return (
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>
//         <p className="text-gray-600 text-lg leading-relaxed text-center">
//           CaterNinja is your one-stop solution for seamless catering services. We provide fresh, 
//           high-quality food for all occasions, ensuring an unforgettable dining experience.
//         </p>
//         <div className="flex justify-center mt-6">
//           <img src=" https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="About us" className="rounded-lg shadow-md"/>
//         </div>
//       </div>
//     );
//   };
  
//   export default About;
  