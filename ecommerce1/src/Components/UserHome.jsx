import Usernav from "./Usernav";
import { Breadcrumbs } from "@mui/material";
import AdminFooter from "./AdminFooter";
import { Route,Routes,BrowserRouter} from "react-router-dom";
import '../Styles/AdminHome.css'
import UserShoppingList from "./UserShoppingList";
import Usercart from "./Usercart";
import { useState,useEffect } from "react";
import Userprofile from "./Userprofile";

const UserHome = () => {
   

    
    return ( 
        <div className="homebody">
        <div className="AdminHome">
            < Usernav/>
            <div className="maincontent">
             
                <Routes>
                <Route path='/' element={<UserShoppingList/>}/>
                <Route path='/usershoppinglist' element={<Usercart/>}/>
                <Route path='/userprofile' element={<Userprofile/>}/>

                </Routes>
            </div>
            <AdminFooter />
        </div></div>
     );
}
 
export default UserHome;