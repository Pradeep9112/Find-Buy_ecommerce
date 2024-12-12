import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Adminnav.css'
import fb   from '../images/fb.webp'
import Userdropdown from './Userdropdown.jsx';




const Usernav = () => {

    return ( 

        <div className="adminnav">
             

            <div className="logoh">
                {/* <h1>E<span>Kart</span></h1>
                 */}
                   <img id="logofb" src={fb} alt="" />
            </div>
            <div className="links">
            {/* <Link to="/adminhome/addproducts" id='goto'></Link> */}
                <Link to="/userhome" id='goto'>Home</Link>
                <Link to='/userhome/usershoppinglist' id='goto'><ShoppingCartIcon/>cart</Link>
              
            </div>
            <div className="account">
               <Userdropdown/>
            </div>
            
        </div>
     );
}
 
export default Usernav;