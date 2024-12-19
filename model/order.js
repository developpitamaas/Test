const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
    recivedAt: {
        type: Date,
    },
    deliverdAt: {
        type: Date,
    },
    
});

module.exports = mongoose.model("Order", orderSchema);