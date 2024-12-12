const mongoose = require('mongoose');
const schema = mongoose.Schema;
const model = mongoose.model;
const productSchema = new schema({
    category: {
        type: String,
        enum: ['Fashion', 'Mobiles', 'Electronics', 'Tv&Appliances', 'Furniture', 'Grocery']
    },
    productname: {
        type: String
        , required: true
    },
    price: {
        type: String
        , required: true

    },
    Desc: {
        type: String
        , required: true

    },
    thum: {
        type: String
        , required: true

    }

}, {
    timestamps: true
}
)
const deletedSchema = new schema({
    category: {
        type: String,
        enum: ['Fashion', 'Mobiles', 'Electronics', 'Tv&Appliances', 'Furniture', 'Grocery']
    },
    productname: {
        type: String
        , required: true
    },
    price: {
        type: String
        , required: true

    },
    Desc: {
        type: String
        , required: true

    },
    thum: {
        type: String
        , required: true

    }

}, {
    timestamps: true
}
)
const Product = model('products', productSchema, 'products');
const DeletedProduct = model('deletedProducts', deletedSchema, 'deletedProducts');
module.exports = {
  Product,
  DeletedProduct,
};