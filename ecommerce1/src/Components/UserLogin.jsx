import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [User, setUser] = useState([]);

  useEffect(() => {
    async function userdata() {
      let data = await fetch("http://localhost:5001/user");
      let info = await data.json();
      setUser(info);
    }
    userdata();
  }, []);

  let navigate = useNavigate();

  function login() {
    const userdata = User.find((ele) => ele.email === username && ele.password === password);
    if (userdata) {
      alert("Login Successful");
      localStorage.setItem("loggedInUser", userdata.name);
      localStorage.setItem("userId", userdata._id);
      navigate("/userhome");
    } else {
      alert("Invalid user or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-100 md:w-150 max-w-lg">
        <div className="text-center mb-6">
          <img
            className="w-32 h-32 mx-auto mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQyIkXK3SnlaJyuZxrtglLTU3aNLyIFcrA28U6Vhu79FqyQZ0"
            alt="Logo"
          />
          <h1 className="text-3xl font-extrabold text-gray-700">User Login</h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              type="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
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
            className=" w-full p-1 bg-green-600 text-white font-semibold rounded-lg border-2 border-transparent hover:bg-green-400 hover:text-green-600 hover:border-green-600 transition-all duration-300"

          >
            Login
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-green-400 hover:text-green-600">
              Forgot Password?
            </a>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/usersignup"
              className="text-sm text-green-400 hover:text-green-600"
            >
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
