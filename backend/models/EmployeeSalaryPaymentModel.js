const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSalary = new Schema({
    EMPID : String,
    EMPName : String,
    EMPDate : String,
    Amount : String,

});

const employeePaymentModel = mongoose.model("EmployeesalaryPayment",employeeSalary);
module.exports = employeePaymentModel;