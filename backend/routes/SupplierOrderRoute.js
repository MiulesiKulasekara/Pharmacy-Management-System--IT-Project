const express = require("express");

const {
  CreateOrder,
  getSupplierOrders,
  getSingleSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOder,

} = require("../controllers/SupplierOrderController");

const router = express.Router();

router.get("/all", getSupplierOrders);
router.post("/add",  CreateOrder);
router.get("/single/:id",  getSingleSupplierOrder);
router.put("/update/:id",  updateSupplierOrder);
router.delete("/delete/:id",  deleteSupplierOder);

module.exports = router;
