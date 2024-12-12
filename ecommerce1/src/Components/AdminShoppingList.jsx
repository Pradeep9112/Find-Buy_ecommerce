import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/AdminShoppingList.css";   
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminShoppingList = () => {
    const [products, setProducts] = useState([]);
    let [force,setforce]=useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5001/Products');
                console.log(res);
                console.log( res.data);
                
                setProducts(res.data);
            } catch (err) {
            
                console.error(err);
            }
        
        };
        fetchData();
    }, [force]);

    function restoreitem(restore){{
        try{
            axios.post('http://localhost:5001/DeletedItems',restore)
        }
        catch{
            console.log('restore error')
        }
    }}
    const deleteitem= async(pid)=>{
        try{
            console.log(pid)
            const restore=products.find(product=>product._id===pid)
            console.log(restore)
            restoreitem(restore)

            await axios.delete(`http://localhost:5001/Products/${pid}`)
              toast.success("product dedleted succesfully")
              setforce(force+1);
    console.log(force);
            //   setProducts(products.filter( product=>product.id!==pid))
        }
        catch{
            console.log('error')
        }
    }
let Navigate=useNavigate();
    function editItem(pid){
Navigate(`/adminhome/editproducts/${pid}`)
    }

    return (
        <div className="viewItems">
            {products.length > 0 ? (
                products.map((product) => (
                    <div className="sub_items" key={product.id}>
                        <h1>{product.category}</h1>
                        <h3>{product.productname}</h3>
                        <img src={product.thum} alt={product.productname} />
                        <h4>${product.price}</h4>
                        <p>{product.Desc}</p>
                        <button onClick={()=>{editItem(product._id)}}><UpdateIcon/> Update</button>
                        <button onClick={()=>{deleteitem(product._id)}}><DeleteIcon/>Delete</button>
                    </div>
                ))
            ) : (
                    <div className="NOPRODUCTS">
                <p>No products available.</p>
            </div>
               
            )}
        </div>
    );
};

export default AdminShoppingList;
