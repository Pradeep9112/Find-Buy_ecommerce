import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import '../Styles/Adminnav.css';
function Admindropdown() {

  return (

    <Dropdown>
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
        <AccountCircleIcon />Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item id="dropdown-down" href=""><AccountBoxIcon /> Profile</Dropdown.Item>
        <Dropdown.Item id="dropdown-down">
          <Link to="/adminsignup" className="text-decoration-none">Add Admin</Link>
        </Dropdown.Item>
        <Dropdown.Item id="dropdown-down" href=""><LogoutIcon></LogoutIcon> Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Admindropdown;