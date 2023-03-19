const myMongoDB = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = myMongoDB.Schema({

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
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id},process.env.JWTPRIVATEKEY);
    return token;
}

const User = myMongoDB.model("user",userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
        address: Joi.string().required().label("Address"),
        phone: Joi.string().required().label("Phone"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };