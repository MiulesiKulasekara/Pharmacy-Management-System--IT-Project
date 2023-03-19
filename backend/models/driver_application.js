//import mongoose package
const myMongoDB = require("mongoose");

//schema same as tables in sql
const schema = myMongoDB.Schema;

const driveApplicationSchema = new schema({
    
    name : {
        type : String,
        requried : true 
    },
    licen : {
        type : String,
        requried : true 
    },
    nic : {
        type : String,
        requried : true 
    },
    email : {
        type : String,
        requried : true 
    },
    address : {
        type : String,
        requried : true 
    },
    phone : {
        type : String,
        requried : true 
    },
    birthDay : {
        type : String,
        requried : true 
    }
});

//data ==> rotes ==> model ==> database

const driverApplicationModel = myMongoDB.model("driverapplication",driveApplicationSchema);

module.exports = driverApplicationModel;
