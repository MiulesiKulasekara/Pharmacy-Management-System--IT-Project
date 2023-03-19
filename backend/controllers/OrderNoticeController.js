asyncHandler = require('express-async-handler')
Notice = require("../models/OrderNotice.js")



const inputOrderNotice = asyncHandler(async (req, res) => {
    const {
        ItemName,
        ItemID,
        ItemQuantity,
        ItemStatus,
        ItemSupplier
      
    } = req.body

    const newNotice = await Notice({
        ItemName,
        ItemID,
        ItemQuantity,
        ItemStatus,
        ItemSupplier
     
    })
    try {
      await newNotice.save()
      res.send(`Notice added\n ${newNotice}`)
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  const getNotice = asyncHandler(async (req, res) => {
    const notice = await Notice.find({})
    res.json(notice)
  })

  const getNoticeById = asyncHandler(async (req, res) => {
    const notice = await Notice.findById(req.params.id)
  
    if (notice) {
      res.json({
        _id: notice._id,
        ItemName: notice.ItemName,
        ItemID: notice.ItemID,
        ItemQuantity: notice.ItemQuantity,
        ItemStatus: notice.ItemStatus,
        ItemSupplier: notice.ItemSupplier
  
      })
    } else {
      res.status(404)
      throw new Error('Item not found')
    }
  })

  const updateItem = asyncHandler(async(req,res) => {
    const {
        ItemName,
        ItemID,
        ItemQuantity,
        ItemStatus,
        ItemSupplier

    } = req.body
  
    const items = await Notice.findById(req.params.id)
  
    if (items) {
        items.ItemName = ItemName,
        items.ItemID = ItemID,
        items.ItemQuantity = ItemQuantity,
        items.ItemStatus = ItemStatus,
        items.ItemSupplier = ItemSupplier
  
      const updateItem = await items.save()
      res.json(updateItem)
    } else {
      res.status(404)
      throw new Error('Item Not found')
    }
  })

 

  module.exports = { inputOrderNotice,getNotice,getNoticeById,updateItem }