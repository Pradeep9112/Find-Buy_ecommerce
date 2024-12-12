const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usersignSchema = new schema({
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
    },
    cart: {  // Added cart field
        type: Array,
        default: []
    }
}, {
    timestamps: true
}

)
module.exports = mongoose.model('users', usersignSchema, 'users')
