//Routes - Rest API

const router = require("express").Router() ;

let driverApplication = require("../models/driver_application");

//Route for INSERT driver application
// ==> http://localhost:8070/driverapplications/addDriverApplication

//post ==> http request method

router.route("/addDriverApplication").post((req , res)=>{

    const name = req.body.name ;
    const licen = req.body.licen ;
    const nic = req.body.nic ;
    const email = req.body.email;
    const address = req.body.address ;
    const phone = req.body.phone ;
    const birthDay = req.body.birthDay ;

    const newApplication = new driverApplication({

        name,
        licen,
        nic,
        email,
        address,
        phone,
        birthDay,

    })

    newApplication.save().then(()=>{
        res.json("A driver application is added.");
    }).catch((error)=>{
        console.log(error);
    })

})

////////////////////////////////////////////////////////////////////

//Route for VIEW driver applications
// ==> http://localhost:8070/driverapplications/viewDriverApplications

router.route("/viewDriverApplications").get((req , res)=>{

    driverApplication.find().then((applications)=>{
        res.json(applications);
    }).catch((error)=>{
        console.log(error);
    })

})

////////////////////////////////////////////////////////////////////

//Route for VIEW a driver application
// ==> http://localhost:8070/driverapplications/viewAdriverApplication

router.route("/viewAdriverApplication/:id").get(async(req,res)=>{

    let id = req.params.id;

    const view = await driverApplication.findById(id).then((driverApplication)=>{
        res.status(200).send({status:"Application is fetched",driverApplication})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with updating data",error:error.message});
    })  
})
////////////////////////////////////////////////////////////////////

//Route for DELETE a driver application
//==> http://localhost:8070/driverapplications/deleteDriverApplication

router.route("/deleteDriverApplication/:id").delete(async(req,res)=>{

    let id = req.params.id;

    await driverApplication.findByIdAndDelete(id).then(()=>{
        res.status(200).send({ststus:"Driver application is deleted"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with deleteing profile",error:error.message});
    })  
})
////////////////////////////////////////////////////////////////////

module.exports = router;