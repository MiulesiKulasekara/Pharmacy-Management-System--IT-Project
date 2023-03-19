const myMongoDB = require("mongoose");

const schema = myMongoDB.Schema;

const order = new schema({
    
    cusName : {
        type : String,
        requried : true 
    },
    address : {
        type : String,
        requried : true 
    },
    orderDate : {
        type : String,
        requried : true 
    },
    status : {
        type : String,
        requried : true 
    }
});

const orderModel = myMongoDB.model("cusorder",order);

module.exports = orderModel;