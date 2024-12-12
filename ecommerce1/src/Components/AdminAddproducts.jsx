import axios from 'axios';
import '../Styles/AdminAddproduct.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
const AdminAddProducts = () => {
    let [category, setCategory] = useState("")
    let [productname, setProducrName] = useState("");
    let [price, setPrice] = useState("");
    let [Desc, setDesc] = useState("");
    let [thum, setThum] = useState("")

    const productData = { category, productname, price, Desc, thum }
    let updateproductDate = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5001/Products', productData)
            .then(res => {
                toast.success("product succesfully added")
                console.log(productData);
            })
            .catch(rej => {
                console.log(rej)
                toast.error('Retry')

            })
    }

    console.log(productData)
    return (

        <div className="addproducts">


            <form action="" onSubmit={updateproductDate} className="addproducts-form">


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
                <input type="" id="price" value={price} placeholder="Enter Price" onChange={e => { setPrice(e.target.value) }} required />
                <label htmlFor="Desc">Desc</label>
                <textarea name="" id="Desc" rows="3" value={Desc} onChange={e => { setDesc(e.target.value) }} required></textarea>
                <label htmlFor="thumnail">Thumnail</label>
                <input type="text" id='thumnail' value={thum} placeholder="Enter image url here" onChange={e => { setThum(e.target.value) }} required />
                <button>Sumbit</button>
            </form>


        </div>
    );
}

export default AdminAddProducts;