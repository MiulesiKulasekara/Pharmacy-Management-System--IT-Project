asyncHandler = require('express-async-handler')
Supply = require("../models/Supply.js")



const inputSupplier = asyncHandler(async (req, res) => {
    const {
      Supplyname,
      SupplyAddress,
      SupplyNic,
      SupplyPhoneNum,
      SupplyEmail,
      SupplyBankAccNum
    } = req.body

    const newSupply = await Supply({
      Supplyname,
      SupplyAddress,
      SupplyNic,
      SupplyPhoneNum,
      SupplyEmail,
      SupplyBankAccNum
    })
    try {
      await newSupply.save()
      res.send(`Supplier added\n ${newSupply}`)
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  const getSuppliers = asyncHandler(async (req, res) => {
    const supply = await Supply.find({})
    res.json(supply)
  })

  const getSupplierbyId = asyncHandler(async (req, res) => {
    const supply = await Supply.findById(req.params.id)
  
    if (supply) {
      res.json({
        _id: supply._id,
        Supplyname: supply.Supplyname,
        SupplyAddress: supply.SupplyAddress,
        SupplyNic: supply.SupplyNic,
        SupplyPhoneNum: supply.SupplyPhoneNum,
        SupplyEmail: supply.SupplyEmail,
        SupplyBankAccNum: supply.SupplyBankAccNum,
  
      })
    } else {
      res.status(404)
      throw new Error('Supplier not found')
    }
  })

  const updateSupplier = asyncHandler(async(req,res) => {
    const {
      Supplyname,
      SupplyAddress,
      SupplyNic,
      SupplyPhoneNum,
      SupplyEmail,
      SupplyBankAccNum
    } = req.body
  
    const items = await Supply.findById(req.params.id)
  
    if (items) {
        items.Supplyname = Supplyname,
        items.SupplyAddress = SupplyAddress,
        items.SupplyNic = SupplyNic,
        items.SupplyPhoneNum = SupplyPhoneNum,
        items.SupplyEmail = SupplyEmail,
        items.SupplyBankAccNum = SupplyBankAccNum
  
      const updateItem = await items.save()
      res.json(updateItem)
    } else {
      res.status(404)
      throw new Error('Supplier Not found')
    }
  })

  const deleteSupplier = asyncHandler(async (req, res) => {
    const supply = await Supply.findById(req.params.id)
  
    if (supply) {
      await supply.remove()
      res.json({ message: 'Supplier removed' })
    } else {
      res.status(404)
      throw new Error('Supplier not found')
    }
  })

  module.exports= { inputSupplier,getSuppliers,updateSupplier,deleteSupplier, getSupplierbyId }