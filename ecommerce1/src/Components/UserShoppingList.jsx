import { useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UserShoppingList = () => {
    const userid = localStorage.getItem("userId");
    console.log(userid);
    let [userproducts, SetuserProducts] = useState([]);
    let [cartproducts, SetcartProducts] = useState([]);
    const navigate = useNavigate();
    // let navigate=useNavigate();
    // Fetch products on initial render
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response = await axios.get('http://localhost:5001/Products');
                SetuserProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, []);
  
    useEffect(() => {
        const fetchCart = async () => {
            if (userid) 
            {
                try     
                {
                    let response = await axios.get(`http://localhost:5001/user/${userid}`);

                    SetcartProducts(response.data.cart); 
                } 
                catch (error) 
                {
                    console.error("Error fetching cart:", error);
                }
            }
        }
        fetchCart();
    }, [userid]);


    // Function to handle adding an item to the cart
    async function cartItem(pid) {
        console.log(pid);
        const cartpresent = cartproducts.find((item) => item.id === pid);
        console.log(cartpresent);
        
if(userid){
        if (cartpresent) {
            toast.error('ITEM ALREADY PRESENT IN CART');
        } else {
            const itemToAdd = userproducts.find(item => item.id === pid);
             console.log(itemToAdd);
             
            if (itemToAdd) {
                try {
                    // Update cart in backend
                    console.log(userid);

                    await axios.patch(`http://localhost:5001/user/${userid}`, {
                        cart: [...cartproducts, itemToAdd]
                        
                    });
                    SetcartProducts(prevCart => [...prevCart, itemToAdd]);
                    toast.success("Item successfully added to cart");
                 
                   
                   
                }
                 catch (error) {
                    console.error("Error updating cart:", error);
                    toast.error("Failed to add item to cart");
                }
            }
        }}
        else{
            toast.error("Please log in to add items to the cart.");
            navigate("/userlogin");

        }
    }

    return ( 
     
        <div className="viewItems">
            {userproducts.length > 0 ? (
                userproducts.map((product) => (
                    <div className="sub_items" key={product.id}>
                        <h1>{product.category}</h1>
                        <h3>{product.productname}</h3>
                        <img src={product.thum} alt={product.productname} />
                        <h4>${product.price}</h4>
                        <p>{product.Desc}</p>
                        <button onClick={() => cartItem(product.id)}>
                            <ShoppingCartIcon /> Cart
                        </button>
                    </div>
                ))
            ) : (
                <div className="NOPRODUCTS">
                    <p>No products available.</p>
                </div>
            )}
        </div>
    );
}

export default UserShoppingList;
