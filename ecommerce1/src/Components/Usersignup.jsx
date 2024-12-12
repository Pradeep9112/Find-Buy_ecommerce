import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Usersignup = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [phone, setPhone] = useState('');
  let data = { name, email, password, phone, cart: [] };
  let navigate = useNavigate();
  let [User, setUser] = useState([]);

  useEffect(() => {
    async function userdata() {
      let data = await fetch('http://localhost:5001/user');
      let info = await data.json();
      setUser(info);
    }
    userdata();
  }, []);

  function updateUser(e) {
    e.preventDefault();
    const duplicate = User.some((ele) => ele.email === email || ele.phone === phone);
    if (duplicate) {
      alert('User already exists');
    } else {
      axios
        .post('http://localhost:5001/usersignup', data)
        .then((res) => {
          alert('User successfully created');
          navigate('/userlogin');
        })
        .catch((err) => {
          alert('Retry');
          console.log(err);
        });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-100 md:w-150 max-w-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-700">Sign Up</h1>
        </div>

        <form onSubmit={updateUser}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-400 hover:text-green-600 hover:border-green-600 transition-all duration-300"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-green-400 hover:text-green-600">
              Forgot Password?
            </a>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/userlogin"
              className="text-sm text-green-400 hover:text-green-600"
            >
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usersignup;
