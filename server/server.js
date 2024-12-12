const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express();
let { MONGODB_URI } = require('./config/index')
const usersignSchema = require('./models/user');
const Adminschema = require('./models/admin');
const {Product,DeletedProduct} = require('./models/products');
  const  productSchema=Product;
  const deletedSchema=DeletedProduct;
app.use(express.json()) 
app.use(cors())
// const Adminroutes=require('./routes/admin')
// app.use('/admin',Adminroutes)

let connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};
connectDb();

// app.post('/usersignup',(req,res)=>{
//     const user=req.body
//     console.log(user);
//  const usersdata = new usersignSchema(user);
//  usersdata.save()

// })
app.get('/user', async (req, res) => {
  try {
    const users = await usersignSchema.find(); // Fetch all users from MongoDB
    res.json(users); // Send the users as a JSON response
  } catch (err) {
    res.status(500).send('Error fetching users: ' + err.message);
  }
});
app.get('/user/:userid', async (req, res) => {
  const { userid } = req.params;
  try {
    const user = await usersignSchema.findById(userid);
    if (!user) {
      return res.status(404).send('User not found.');
    }
    res.json(user); // Send the user data including the cart
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error while fetching user.');
  }
});
app.patch('/user/:userid', async (req, res) => {
  const { userid } = req.params;
  const { cart } = req.body;
  // console.log("Incoming UserID:", userid);
  // console.log("Incoming Cart Data:", cart);

  try {
    const user = await usersignSchema.findById(userid);
    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Update the cart for the user
    user.cart = cart;
    await user.save();

    res.status(200).send('Cart updated successfully.');
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).send('Server error while updating cart.');
  }
});


app.post('/usersignup', (req, res) => {
  const user = req.body;
  // console.log("Before saving:", user);  // Log the user data here

  const usersdata = new usersignSchema(user);
  usersdata.save()
    .then(() => res.status(201).send("User registered successfully"))
    .catch((err) => console.log(err));
});
app.get('/admin', async (req, res) => {
  try {
    const admin = await Adminschema.find();
    res.json(admin)
  }
  catch (error) {
    res.status(500).send('Error fetching users: ' + err.message);

  }
})
app.post('/admin', (req, res) => {
  const admin = req.body;
  const admindata = new Adminschema(admin)
  admindata.save()
    .then(() => res.status(201).send("admin registered successfully"))
    .catch((err) => console.log(err));
})
app.get('/Products',async (req,res)=>{
  try{
  const products=await productSchema.find();
  // console.log(products)
  res.json(products);}
  catch (error) {
    res.status(500).send('Error fetching data: ' + err.message);

  }
})
app.post('/Products', (req, res) => {
  const data = req.body;
  const productdata = new productSchema(data);
  productdata.save()
  .then(() => res.status(201).send("product registered successfully"))
    .catch((err) => console.log(err));;
})
app.get('/DeletedItems',async(req,res)=>{
  let item=await deletedSchema.find();
  res.json(item);
})
app.post('/DeletedItems',(req,res)=>{
  let item=req.body;
  const deleteditem=new deletedSchema(item)
  deleteditem.save()
  .then(() => res.status(201).send("product deleted successfully"))
    .catch((err) => console.log(err));;
})
app.delete('/DeletedItems/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const deletedProduct = await deletedSchema.findByIdAndDelete(pid);
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  }catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});
app.get('/Products/:id', async (req, res) => {
  const { id } = req.params; // Extract product ID from the route parameter

  try {
    // Find the product by ID
    const product = await Product.findById(id);

    if (!product) {
      // If the product is not found, return a 404 response
      return res.status(404).send('Product not found.');
    }

    // Send the found product as the response
    res.status(200).json(product);
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching product:', error);

    // Return a 500 status for server errors
    res.status(500).send('Server error while fetching product.');
  }
});

app.delete('/Products/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const deletedProduct = await productSchema.findByIdAndDelete(pid);
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  }catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});
app.put('/Products/:id', async (req, res) => {
  const { id } = req.params; // Extract product ID from the URL
  const updatedData = req.body; // Extract the updated product data from the request body

  try {
    // Find the product by ID
    const product = await productSchema.findById(id); // Use the correct `id` variable
    if (!product) {
      // If product not found, return a 404 response
      return res.status(404).send('Product not found.');
    }

    // Update the product directly with `set`
    product.set(updatedData);

    // Save the updated product document
    await product.save();

    // Send a success response
    res.status(200).send('Product updated successfully.');
  } catch (error) {
    // Log the error for debugging
    console.error('Error updating product:', error);

    // Send a 500 error response
    res.status(500).send('Server error while updating product.');
  }
});



app.listen(5001, (err) => {
  if (err) throw err;
  console.log('running on the port 5001')
})