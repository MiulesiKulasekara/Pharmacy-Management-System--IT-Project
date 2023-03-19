const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierpayment = new Schema({
    sOrderID :  String,//come from the supplier 
    SName : String,//come from the supplier 
    Amount : String,//come from the supplier 
    datepay : String,
    paytype : String,
    State : String,//come from the supplier 
});

const suplierpaymentModel = mongoose.model("SupplierPaymentdemo",supplierpayment);
module.exports = suplierpaymentModel;