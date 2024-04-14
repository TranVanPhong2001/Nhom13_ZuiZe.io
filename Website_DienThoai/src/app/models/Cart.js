const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Cart= new Schema(
    {
        name1: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: { type: String,required: true},

        DienThoai: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'DienThoai'
        },
    }
);

module.exports = mongoose.model('Cart', Cart,"Cart");