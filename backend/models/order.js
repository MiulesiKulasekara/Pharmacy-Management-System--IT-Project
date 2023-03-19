mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

   
    itemname:{
        type: String,
        required: true
    },
    itemnumber:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    
   
}, {
    timestamps: true
})

const Order = mongoose.model('order', orderSchema)
 
module.exports = Order