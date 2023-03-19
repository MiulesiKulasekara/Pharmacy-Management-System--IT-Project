const myMongoDB = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const driverSchema = myMongoDB.Schema({

    name : {
        type : String,
        requried : true 
    },
    email : {
        type : String,
        requried : true,
        unique : true
    },
    password : {
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
    licen : {
        type : String,
        requried : true 
    },
    nic : {
        type : String,
        requried : true 
    },
    birthDay : {
        type : String,
        requried : true 
    }
})

driverSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id},process.env.JWTPRIVATEKEYDriver);
    return token;
}

const Driver = myMongoDB.model("deliveryBoys",driverSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
        address: Joi.string().required().label("Address"),
        phone: Joi.string().required().label("Phone"),
        nic: Joi.string().required().label("NIC"),
        licen: Joi.string().required().label("Licen"),
        birthDay: Joi.string().required().label("Birthday"),
        
	});
	return schema.validate(data);
};

module.exports = { Driver, validate };