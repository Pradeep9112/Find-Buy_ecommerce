import { Breadcrumbs } from "@mui/material";
import AdminAddProducts from "./AdminAddproducts";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import '../Styles/AdminHome.css'
import AdminShoppinList from "./AdminShoppingList";
import Adminrestore from "./Adminrestore";
import Adupdateproduct from "./Adupdateproducts";

const AdminHome = () => {
    return ( 
     <div className="homebody">
        <div className="AdminHome">
            <AdminNavbar />
            <div className="maincontent">
                <Routes>
                    <Route path="/addproducts" element={<AdminAddProducts />} />
                    <Route path="/ShoppingList" element={<AdminShoppinList/>}/>
                    <Route path='/restoreitem' element={<Adminrestore/>}/>
                    <Route path="/editproducts/:id" element={<Adupdateproduct/>}/>
                </Routes>
            </div>
            <AdminFooter />
        </div></div>
   
     );
}
 
export default AdminHome;