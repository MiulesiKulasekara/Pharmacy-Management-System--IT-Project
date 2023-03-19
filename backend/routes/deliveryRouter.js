const router = require("express").Router() ;

let delivery = require("../models/delivery_module");

//Route for CREAT delivery
// ==> http://localhost:8070/delivery/addDelivery

router.route("/addDelivery").post((req , res)=>{

    const cusName = req.body.cusName ;
    const drivername = req.body.drivername ;
    const address = req.body.address ;
    const deliveredDate = req.body.deliveredDate;
    const status = req.body.status;
    const driverid = req.body.driverid

    const newDelivery = new delivery({

        cusName,
        drivername,
        address,
        deliveredDate,
        status,
        driverid
    })
    newDelivery.save().then(()=>{
        res.json("A new delivery is added.");
    }).catch((error)=>{
        console.log(error);
    })
})

////////////////////////////////////////////////////////////////////

//Route for VIEW all dreliveries by admin 
//==> http://localhost:8070/delivery/viewAllDeliveries

router.route("/viewAllDeliveries").get((req , res)=>{

    delivery.find().then((profiles)=>{
        res.json(profiles);
    }).catch((error)=>{
        console.log(error);
    })
})

////////////////////////////////////////////////////////////////////

//Route for VIEW a delivery
//==> http://localhost:8070/delivery/viewADelivery

router.route("/viewADelivery/:id").get(async(req,res)=>{

    let id = req.params.id;

    const view = await delivery.findById(id).then((delivery)=>{
        res.status(200).send({status:"Delivery is fetched",delivery})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with updating data",error:error.message});
    })  
})

////////////////////////////////////////////////////////////////////

//Route for UPDATE a delivery by driver
//==> http://localhost:8070/delivery/updateDeliveries

router.route("/updateDeliveries/:id").put(async(req,res)=>{

    let id = req.params.id;

    const {deliveredDate,status} = req.body;

    const updateDelivery = {
        deliveredDate,
        status,
    }

    const update = await delivery.findByIdAndUpdate(id , updateDelivery).then(()=>{
        res.status(200).send({ststus:"Delivery is updated"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with updating data",error:error.message});
    })  
})
////////////////////////////////////////////////////////////////////

//Route for DELETE a delivery admin
//==> http://localhost:8070/delivery/deleteDeliveries

router.route("/deleteDeliveries/:id").delete(async(req,res)=>{

    let id = req.params.id;

    await delivery.findByIdAndDelete(id).then(()=>{
        res.status(200).send({ststus:"Delivery is deleted"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with deleteing profile",error:error.message});
    })  
})
////////////////////////////////////////////////////////////////////

module.exports = router;