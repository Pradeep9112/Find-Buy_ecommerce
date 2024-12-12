import { useEffect, useState } from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { toast } from "react-toastify";

const Adminrestore = () => {
    let [restore,setRestore]=useState([]);
    let [force,setforce]=useState(0);
    
    useEffect(()=>{
        async function restorefetch(){
            let restorearr=await fetch('http://localhost:5001/DeletedItems')
            let rest=await restorearr.json();
            setRestore(rest);
          };
         
          restorefetch();  
    },[force])
    console.log(restore)

    const deleterestore=async(pid)=>{
        try{
        await axios.delete(`http://localhost:5001/DeletedItems/${pid}`)
        // setRestore(restore.filter(item=>item.id!==pid))
        setforce(force+1);
        console.log(force);
        toast.error('Deleted succesfully')
    }
    catch{
        console.log("error")
    }
}
const restoreproduct=async(pid)=>{
    let item = restore.find(item=>item._id===pid)
    await axios.post('http://localhost:5001/Products',item)
    await axios.delete(`http://localhost:5001/DeletedItems/${pid}`)
    // setRestore(restore.filter(item=>item.id!==pid))
    setforce(force+1);
    console.log(force);
    toast.success('succesfully Restored')
    console.log(item);
}
    return (  
        <div className="viewItems">
            
            {restore.length>0 ?(
            restore.map((item=>{
                return(
                    <div className="sub_items" key={item.id}>
                        <h1>{item.category}</h1>
                        <h3>{item.productname}</h3>
                        <img src={item.thum} alt={item.productname} />
                        <h4>{item.price}</h4>
                        <p>{item.Desc}</p>
                            <button onClick={()=>{restoreproduct(item._id)}}>< RestoreIcon/>Restore</button>
                            <button onClick={()=>{deleterestore(item._id)}}>< DeleteIcon />Delete</button>
                    </div>
                )
            }))
        ):(
            <div className="NOPRODUCTS">
            <p>No products available.</p>
          </div>
        )
            }
        </div>
    );
}
 
export default Adminrestore;