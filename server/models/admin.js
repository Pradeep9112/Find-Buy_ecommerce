const mongoose=require('mongoose')
const model=mongoose.model;
const schema=mongoose.Schema;
const adminsignupschema=new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
},{ timestamps: true})
module.exports=model('admins',adminsignupschema,'admins')