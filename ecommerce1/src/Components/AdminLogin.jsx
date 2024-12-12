import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [Admin, setAdmin] = useState([]);

  useEffect(() => {
    async function fetchAdmin() {
      let data = await fetch("http://localhost:5001/Admin");
      let res = await data.json();
      setAdmin(res);
    }
    fetchAdmin();
  }, []);

  let navigate = useNavigate();

  function login() {
    let val = Admin.filter(
      (e) => e.email === username && e.password === password
    );
    if (val.length > 0) {
      alert("Login Successful");
      navigate("/adminhome");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-100 md:w-150 max-w-lg">
        <div className="text-center mb-6">
          <img
            className="w-32 h-32 mx-auto mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQyIkXK3SnlaJyuZxrtglLTU3aNLyIFcrA28U6Vhu79FqyQZ0"
            alt="Admin Logo"
          />
          <h1 className="text-3xl font-extrabold text-gray-700">Admin Login</h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              type="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            onClick={login}
            className="w-full p-1 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-600">
              Forgot Password?
            </a>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/adminsignup"
              className="text-sm text-indigo-400 hover:text-indigo-600"
            >
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
