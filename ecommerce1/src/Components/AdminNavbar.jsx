import Admindropdown from './Admindropdown.jsx';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Adminnav.css';
import fb from '../images/fb.webp';

const AdminNavbar = () => {
    return (
        <div className="adminnav">
            <div className="logoh">
                <NavLink to="/adminhome">
                    <img id="logofb" src={fb} alt="Admin Logo" />
                </NavLink>

            </div>
            <div className="links">
                <NavLink to="/adminhome/addproducts" id="goto" title="Add Products">Add Products</NavLink>
                <NavLink to="/adminhome/ShoppingList" id="goto" title="Shopping List">Shopping List</NavLink>
                <NavLink to="/adminhome/restoreitem" id="goto" title="Deleted Products">
                    <ShoppingCartIcon /> Deleted Products
                </NavLink>
            </div>
            <div className="account">
                <Admindropdown />
            </div>
        </div>
    );
};

export default AdminNavbar;
