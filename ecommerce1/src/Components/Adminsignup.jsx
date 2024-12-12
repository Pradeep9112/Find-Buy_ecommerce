import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Adminsignup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPswd] = useState("");
  let [phone, setPhone] = useState("");
  let data = { name, email, password, phone };
  
  function updateData(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5001/admin", data)
      .then((res) => {
        alert("Account created");
      })
      .catch((err) => {
        console.log(err);
      });
  }

//   function eyebtn() {
//     const passwordField = document.getElementById("password");
//     const currentType = passwordField.getAttribute("type");
//     const eyeimg = document.querySelector(".eye");
//     if (currentType === "password") {
//       passwordField.setAttribute("type", "text");
//       eyeimg.style.backgroundImage =
//         "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaF2PKlFTP40-0ISYo-C1zXhPdybyVsdwwSw&s)";
//     } else {
//       passwordField.setAttribute("type", "password");
//       eyeimg.style.backgroundImage =
//         "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7drxXWCHEbbLtwyu6Toy9ZFQpSHb6P7ZYkvUlQX6F54X7SjXv-YLSfM4WC1_g_WrKjA&usqp=CAU')";
//     }
//   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-100 md:w-150 max-w-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-700">Admin Sign Up</h1>
        </div>
        <form onSubmit={updateData} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPswd(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
            {/* <div className="eye"> <button id="eyebtn" type="button" onClick={eyebtn}></button></div> */}
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-400 hover:text-green-600 hover:border-green-600 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
