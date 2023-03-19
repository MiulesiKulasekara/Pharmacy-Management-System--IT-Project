
const router = require("express").Router() ;

let order = require("../models/order_model");

//Route for INSERT order
// ==> http://localhost:8070/order/addOrder

//post ==> http request method

router.route("/addOrder").post((req , res)=>{

    const cusName = req.body.cusName ;
    const address = req.body.address ;
    const orderDate = req.body.orderDate ;
    const status = req.body.status;

    const newOrder = new order({

        cusName,
        address,
        orderDate,
        status,

    })

    newOrder.save().then(()=>{
        res.json("A new order is added.");
    }).catch((error)=>{
        console.log(error);
    })

})

////////////////////////////////////////////////////////////////////

//Route for VIEW oders
// ==> http://localhost:8070/order/viewOrder

router.route("/viewOrder").get((req , res)=>{

    order.find().then((order)=>{
        res.json(order);
    }).catch((error)=>{
        console.log(error);
    })

})

////////////////////////////////////////////////////////////////////

//Route for VIEW a order 
//==> http://localhost:8070/order/viewAorder

router.route("/viewAorder/:id").get(async(req,res)=>{

    let id = req.params.id;

    const view = await order.findById(id).then((order)=>{
        res.status(200).send({status:"Order is fetched",order})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with updating data",error:error.message});
    })  
})

module.exports = router;