mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({

   
    name:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    expireDate:{
        type: Date,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0
    }
   
}, {
    timestamps: true
})

const Inventory = mongoose.model('inventory', inventorySchema)
 
module.exports = Inventory