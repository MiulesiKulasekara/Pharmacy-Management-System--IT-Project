const express = require("express");

const {

    createNewEMpayment,
    getAllEmployeePayments,
    getSingleEmployeePayment,
    updateEmployeePayment,
    deleteEmployeePayment,

}=require("../controllers/EmployeePaymentController");

const router = express.Router();

router.get("/all", getAllEmployeePayments);
router.post("/add",  createNewEMpayment);
router.get("/single/:id",  getSingleEmployeePayment);
router.put("/update/:id",  updateEmployeePayment);
router.delete("/delete/:id",  deleteEmployeePayment);

module.exports = router;