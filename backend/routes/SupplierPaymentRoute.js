const express = require("express");

const {
    createSPayment,
    getSPayments,
    getSinglePayment,
    updateSPayment,
    deleteSPayment,

} = require("../controllers/SupplierPaymentController");

const router = express.Router();

router.get("/all", getSPayments);
router.post("/add",  createSPayment);
router.get("/single/:id",  getSinglePayment);
router.put("/update/:id",  updateSPayment);
router.delete("/delete/:id",  deleteSPayment);

module.exports = router;