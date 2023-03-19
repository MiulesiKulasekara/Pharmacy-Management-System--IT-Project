 mongoose = require('mongoose')

const SupplySchema = mongoose.Schema({

    Supplyname:{
        type: String,
        required: true
    },
    SupplyAddress:{
        type: String,
        required: true
    },
    SupplyNic:{
        type: String,
        required: true
    },
    SupplyPhoneNum:{
        type: Number,
        required: true,
        default: 0
    },
    SupplyEmail:{
        type: String,
        required: true,
    },
    SupplyBankAccNum:{
        type: String,
        required: true,
    }
    
   
}, {
    timestamps: true
})

const Supply = mongoose.model('Supply', SupplySchema)
 
module.exports = Supply