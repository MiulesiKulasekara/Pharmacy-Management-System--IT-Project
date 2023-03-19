const myMongoDB = require("mongoose");

const schema = myMongoDB.Schema;

const delivery = new schema({
    
    cusName : {
        type : String,
        requried : true 
    },
    drivername : {
        type : String,
        requried : true 
    },
    address : {
        type : String,
        requried : true 
    },
    deliveredDate : {
        type : String,
        requried : true 
    },
    status : {
        type : String,
        requried : true 
    },
    driverid : {
        type : String ,
        requried : true 
    }
});

const deliveryModel = myMongoDB.model("cusDelivery",delivery);

module.exports = deliveryModel;