Inventory =require("../models/inventory.js")
asyncHandler = require('express-async-handler')



const inputItem = asyncHandler(async (req, res) => {
    const {
      name,
      companyName,
      quantity,
      category,
      expireDate,
      price
    } = req.body

    const newItem = await Inventory({
      name,
      companyName,
      quantity,
      category,
      expireDate,
      price
    })
    try {
      await newItem.save()
      res.send(`item added\n ${newItem}`)
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  const getItems = asyncHandler(async (req, res) => {
    const item = await Inventory.find({})
    res.json(item)
  })

  const getItemById = asyncHandler(async (req, res) => {
    const item = await Inventory.findById(req.params.id)
  
    if (item) {
      res.json({
        _id: item._id,
        name: item.name,
        companyName: item.companyName,
        quantity: item.quantity,
        category: item.category,
        expireDate: item.expireDate,
        price: item.price,
  
      })
    } else {
      res.status(404)
      throw new Error('Item not found')
    }
  })

  const updateItem = asyncHandler(async(req,res) => {
    const {
      name,
      companyName,
      quantity,
      category,
      expireDate,
      price
    } = req.body
  
    const items = await Inventory.findById(req.params.id)
  
    if (items) {
        items.name = name,
        items.companyName = companyName,
        items.quantity = quantity,
        items.category = category
        items.expireDate = expireDate
        items.price = price
  
      const updateItem = await items.save()
      res.json(updateItem)
    } else {
      res.status(404)
      throw new Error('Item Not found')
    }
  })

  const deleteItem = asyncHandler(async (req, res) => {
    const item = await Inventory.findById(req.params.id)
  
    if (item) {
      await item.remove()
      res.json({ message: 'item removed' })
    } else {
      res.status(404)
      throw new Error('Item not found')
    }
  })

  module.exports = { inputItem,getItems,updateItem,deleteItem, getItemById }