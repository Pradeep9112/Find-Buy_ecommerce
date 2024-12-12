import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Usercart = () => {
    const userid = localStorage.getItem("userId");
    console.log(userid);
    let[cartproducts,setcart]=useState([]);

    useEffect(()=>{
        let updatecart=async()=>{
           if(userid)
           {
            let cartItems= await axios.get(`http://localhost:5001/user/${userid}`)
             setcart(cartItems.data.cart);
       }}
         updatecart();
    },[])
    // console.log(cartproducts)
    let cartRemove=async(pid)=>{
        const updatecart=cartproducts.filter((item)=>{return item.id!==pid})
        try{
        await axios.patch(`http://localhost:5001/user/${userid}`,{cart:updatecart})
        toast.success("item succesfully aremoved from cart")
        setcart(updatecart)

    }
    catch(err){
        console.log(err)
        toast.error('RETRY')
    }
        
    }
    
    return (       <div className="viewItems">
        {cartproducts.length > 0 ? (
            cartproducts.map((product) => (
                <div className="sub_items" key={product.id}>
                    <h1>{product.category}</h1>
                    <h3>{product.productname}</h3>
                    <img src={product.thum} alt={product.productname} />
                    <h4>${product.price}</h4>
                    <p>{product.Desc}</p>
                    <button onClick={()=>{cartRemove(product.id)}}>Remove</button>
                </div>
            ))
        ) : (
                <div className="NOPRODUCTS">
            <p>No products available.</p>
        </div>
           
        )}
    </div> );
}
 
export default Usercart;