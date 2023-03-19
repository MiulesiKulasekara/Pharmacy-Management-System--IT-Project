const SPOrder = require("../models/SupplierOrderModel");

const CreateOrder = (req, res) => {
  const {SPLID, SName, DaySMade, Amount, State } = req.body;

  const newSPOrder = new SPOrder({
    SPLID,
    SName,
    DaySMade,
    Amount,
    State,
  });

  newSPOrder
    .save()
    .then(() => {
      res.status(200).json("upload success");
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSupplierOrders = async (req, res) => {
  try {
    const supplieOrders = await SPOrder.find();
    res.status(200).json(supplieOrders);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getSingleSupplierOrder = async (req, res) => {
  try {
    const orderid = req.params.id;
    const sporder = await SPOrder.findById(orderid);
    res.status(200).json(sporder);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateSupplierOrder = async (req, res) => {
  const orderid = req.params.id;
  try {
    const sporder = await SPOrder.findById(orderid);

    if (!sporder) {
      res.status(404).json("Supplier Order not found!");
    }
    const {SPLID, SName, DaySMade, Amount, State } = req.body;
    const orderupdated = await SPOrder.findByIdAndUpdate(orderid, {
      SPLID,
      SName,
      DaySMade,
      Amount,
      State,
    });
    res.status(200).json("Supplier Order successfully updated");
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteSupplierOder = async (req, res) => {
  const orderid = req.params.id;
  try {
    const spoid = await SPOrder.findById(orderid);

    if (!spoid) {
      res.status(404).json("Supplier Order not found!");
    }

    await SPOrder.findByIdAndRemove(orderid);
    
    res.status(200).json("Supplier Order successfully deleted");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  CreateOrder,
  getSupplierOrders,
  getSingleSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOder,
};
