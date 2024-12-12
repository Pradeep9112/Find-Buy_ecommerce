import { Link } from 'react-router-dom';
import React from 'react';

const Landing = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 md:p-12 max-w-6xl w-full">
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link to="/adminlogin" className="text-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-800 hover:text-blue-500 transition-colors duration-300">Admin Login</h1>
              <img
                id="image"
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-blue-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLx8rNdAmSRC3nJh5gwYdsURMu-DcWUn81UFJjlmLafs6yKUxK6rDpzMRmYp5A3azK98&usqp=CAU"
                alt="Admin"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link to="/userlogin" className="text-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-800 hover:text-blue-500 transition-colors duration-300">User Login</h1>
              <img
                id="image"
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-blue-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcpZtS76Z240-eZOBcm1PRiGh1siQFD4fLQ&s"
                alt="User"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;


// npx json-server --watch ./Data/info.json --port 5000
