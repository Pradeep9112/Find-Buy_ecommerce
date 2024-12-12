import { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/UserProfile.css';
const Userprofile = () => {
    const userid = localStorage.getItem("userId");
    let[user,setuser]=useState({});
    useEffect(()=>{
        async function fetchuser(){
            if(userid)
        {
            let res=await axios.get(`http://localhost:5001/user/${userid}`)
            let data=res.data;
            setuser(data);
        }

        
        }
      
        fetchuser();
    },[userid])
  
    console.log(user)
    return ( 
        
        <div className="userProfile">
            {userid ? (
                    <>
                        <h1>{user.name}</h1>
                        <div className="profile-info">
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
    
                        </div>
                    </>
                ) : (
                    <div className="loading">No user logged in...</div>
                )
    
           }
    </div>

     );
}
 
export default Userprofile;