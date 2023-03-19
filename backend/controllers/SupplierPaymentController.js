const SPayment = require("../models/SupplypaymentModel");

const createSPayment = (req, res) => {
  const { sOrderID, SName, Amount, datepay, paytype, State } =
    req.body;

  const spayment = new SPayment({
    sOrderID,
    SName,
    Amount,
    datepay,
    paytype,
    State,
  });

  spayment
    .save()
    .then(() => {
      res.status(200).json("Supplier payment add successfully!");
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getSPayments = async (req, res) => {
  try {
    const supplierPayment = await SPayment.find();
    res.status(200).json(supplierPayment);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getSinglePayment = async (req, res) => {
  try {
    const paymentid = req.params.id;
    const payment = SPayment.findById(paymentid);
    if (!payment) {
      res.status(404).json("Supplier payment not pound!");
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateSPayment = async (req, res) => {
  try {
    const payid = req.params.id;
    const payment = await SPayment.findById(payid);
    if (!payment) {
      res.status(404).json("Supplier payment not pound!");
    }
    const { supplierID, supplierName, amountpay, datepay, paytype, paystatus } =
      req.body;

    const sPaymentUpdated = await SPayment.findByIdAndUpdate(payid, {
      supplierID,
      supplierName,
      amountpay,
      datepay,
      paytype,
      paystatus,
    });

    res.status(200).json("Supplier order successfully updated!");
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteSPayment = async (req, res) => {
  try {
    const payid = res.params.id;
    const payment = await SPayment.findById(payid);
    if (!payment) {
      res.status(404).json("Supplier payment not found!");
    }

    const removespayment = await SPayment.findByIdAndRemove(payid);

      res.status(200).json(removespayment);
   
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    createSPayment,
    getSPayments,
    getSinglePayment,
    updateSPayment,
    deleteSPayment,

}
