const EmpPaymentmodel = require("../models/EmployeeSalaryPaymentModel");

const createNewEMpayment = (req, res) => {


  const {EMPID,EMPName,EMPDate, Amount } = req.body;

  const newEmpPayment = new EmpPaymentmodel({
    EMPID,
    EMPName,
    EMPDate,
    Amount,
  });

  newEmpPayment
    .save()
    .then(() => {
      res.status(200).json("Employee Payment successfull");
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllEmployeePayments = async (req, res) => {
  try {
    const employeePayments = await EmpPaymentmodel.find();
    res.status(200).json(employeePayments);
  } catch (error) {
    res.status(400).json(error);
  }
};


const getSingleEmployeePayment = async (req, res) => {
    try {
      const payid = req.params.id;
      const emppay = await EmpPaymentmodel.findById(payid);
      res.status(200).json(emppay);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  const updateEmployeePayment = async (req, res) => {
    const payid = req.params.id;
    try {
      const emppay = await EmpPaymentmodel.findById(payid);
  
      if (!emppay) {
        res.status(404).json("Employee payment not found!");
      }
      const { EMPID, EMPName, EMPDate, Amount } = req.body;
      const orderupdated = await EmpPaymentmodel.findByIdAndUpdate(payid, {
        EMPID, EMPName, EMPDate, Amount
      });
      res.status(200).json("Employee payment successfully updated");
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  const deleteEmployeePayment = async (req, res) => {
    const payid = req.params.id;
    try {
      const demppay = await EmpPaymentmodel.findById(payid);
  
      if (!demppay) {
        res.status(404).json("Employee payment not found!");
      }
  
      await EmpPaymentmodel.findByIdAndRemove(payid);
      res.status(200).json("Employee payment successfully deleted");
    } catch (error) {
      res.status(200).json(error);
    }
  };


  module.exports={

    createNewEMpayment,
    getAllEmployeePayments,
    getSingleEmployeePayment,
    updateEmployeePayment,
    deleteEmployeePayment,

  }
