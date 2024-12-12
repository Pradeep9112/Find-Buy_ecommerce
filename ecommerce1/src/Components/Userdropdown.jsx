import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Styles/Adminnav.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Userdropdown() {
    const [userName, setUserName] = useState("");
    const userid = localStorage.getItem("userId");
  
    
    useEffect(() => {
        // Retrieve the name of the logged-in user from localStorage
        const loggedInUser = localStorage.getItem("loggedInUser");
      
          setUserName(loggedInUser);
       
        

      }, []);
  
      console.log(userName)
      const handleLogout = () => {
        // Clear user data from local storage
        localStorage.clear();

    
        // Optionally, redirect the user to the login page or home page
        window.location.href = "/userlogin"; // or use React Router's navigate if using React Router
    
        // Optional: Show a success message or redirect the user
        toast.success("Logged out successfully!");
    };
    
  return (
    
    <Dropdown>
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
       <AccountCircleIcon/>{userName||'GUEST'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item id="dropdown-down" as={Link} to='/userhome/userprofile'><AccountBoxIcon/> {userName||"GUEST"}</Dropdown.Item>
        <Dropdown.Item id="dropdown-down">Another action</Dropdown.Item>
        <Dropdown.Item id="dropdown-down"  onClick={handleLogout}><LogoutIcon></LogoutIcon> {userid?'Logout':'login'}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Userdropdown;