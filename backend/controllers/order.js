Order = require("../models/order.js")
asyncHandler = require('express-async-handler')



const inputorder = asyncHandler(async (req, res) => {
    const {
        itemname,
        itemnumber,
        quantity,
      
    } = req.body

    const neworder = await Order({
        itemname,
        itemnumber,
        quantity,
    })
    try {
      await neworder.save()
      res.send(`order added\n ${neworder}`)
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  module.exports =  { inputorder }