const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierorder = new Schema({ 
    SPLID : String,
    SName : String,
    DaySMade : String,
    Amount : String,
    State : String,
})

const SupplierOrderModel = mongoose.model("SuplierOrder",supplierorder);
module.exports = SupplierOrderModel;