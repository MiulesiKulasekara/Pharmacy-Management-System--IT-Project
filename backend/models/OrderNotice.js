mongoose = require('mongoose')

const OrderNotice = mongoose.Schema({

    ItemName:{
        type: String,
        required: true
    },
    ItemID:{
        type: String,
        required: true
    },
    ItemQuantity:{
        type: Number,
        required: true
    },
    ItemStatus:{
        type: String,
        default: "pending"
        
    },
    ItemSupplier:{
        type: String,
        default: "notset"

    }

   
}, {
    timestamps: true
})

const notice = mongoose.model('OrderNotice', OrderNotice)
 
module.exports =  notice