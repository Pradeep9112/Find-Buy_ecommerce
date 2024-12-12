import axios from 'axios';
import '../Styles/AdminAddproduct.css'
import '../Styles/Adupdate.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

const Adupdateproduct = () => {
    let [category, setCategory] = useState("")
    let [productname, setProducrName] = useState("");
    let [price, setPrice] = useState("");
    let [Desc, setDesc] = useState("");
    let [thum, setThum] = useState("")

    let param=useParams();
    let updateobj={category,productname,price,Desc,thum}
    // console.log(updateobj)
 useEffect(()=>{
    axios.get(`http://localhost:5001/Products/${param.id}`)
    .then(res=>{
          let payload=res.data;
        //   console.log(typeof payload)
        setCategory(payload.category)
        setProducrName(payload.productname)
        setPrice(payload.price)
        setDesc(payload.Desc)
        setThum(payload.thum) 
    })
    .catch(err=>{
        console.log(err)
    })
 },[])
    async function updatepproduct(e){
        e.preventDefault();
                await axios.put(`http://localhost:5001/Products/${param.id}`,updateobj)
                toast.success('updated succesfully')
    }
    return (
        <div className="editpd">
        <div className="addproducts">


            <form action="" onSubmit={updatepproduct} className="addproducts-form">


                <label htmlFor="">
                    Category
                </label>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="" disabled selected>Select Category</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Tv&Appliances">TV & Appliances</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Grocery">Grocery</option>
                </select>
                <label htmlFor="productname">ProductName</label>
                <input type="text" name="" id="productname" value={productname} placeholder="Enter product name" onChange={e => { setProducrName(e.target.value) }} required />
                <label htmlFor="price">Price</label>
                <input type="" id="price" value={price} placeholder="Enter Price" onChange={e =>{ setPrice(e.target.value) }} required />
                <label htmlFor="Desc">Desc</label>
                <textarea name="" id="Desc" rows="3" value={Desc} onChange={e =>{ setDesc(e.target.value) }} required></textarea>
                <label htmlFor="thumnail">Thumnail</label>
                <input type="text" id='thumnail' value={thum} placeholder="Enter image url here" onChange={e => { setThum(e.target.value) }} required />
                <button>Update</button>
            </form>


        </div></div>
      );
}
 
export default Adupdateproduct;