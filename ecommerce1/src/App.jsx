import AdminLogin from "./Components/AdminLogin";
import Landing from "./Components/Landing";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import { Adminsignup } from "./Components/Adminsignup";
import AdminHome from "./Components/AdminHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Usersignup from "./Components/Usersignup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserHome from "./Components/UserHome";

const App = () => {
  return ( 
    <div className="app">

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/adminlogin" element={<AdminLogin/>}/>
    <Route path="/userlogin" element={<UserLogin/>}/>
    <Route path="/adminsignup" element={<Adminsignup/>}/>
    <Route path="/adminhome/*" element={<AdminHome/>}/>
    <Route path="/userhome/*" element={<UserHome/>}/>

    <Route path="/usersignup" element={<Usersignup/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div> 
  );
}
 
export default App;