const router = require("express").Router() ;
const { Driver,validate } = require("../models/driver_profilemodel");
const bcrypt = require("bcrypt");

//http://localhost:8070/driverprofile/addDriverProfile
router.post("/addDriverProfile", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await Driver.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "Driver with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Driver({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "Driver created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

////////////////////////////////////////////////////////////////////

//Route for VIEW all driver profiles 
//==> http://localhost:8070/driverprofile/viewDriverProfiles

router.route("/viewDriverProfiles").get((req , res)=>{

    Driver.find().then((profiles)=>{
        res.json(profiles);
    }).catch((error)=>{
        console.log(error);
    })
})

////////////////////////////////////////////////////////////////////

//Route for VIEW a driver profile 
//==> http://localhost:8070/driverprofile/viewAprofile

router.route("/viewAprofile/:id").get(async(req,res)=>{

    let id = req.params.id;

    const view = await Driver.findById(id).then((Driver)=>{
        res.status(200).send({status:"Profile is fetched",Driver})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with updating data",error:error.message});
    })  
})

////////////////////////////////////////////////////////////////////


//Route for UPDATE a driver profile by admin
//==> http://localhost:8070/driverprofile/updateDriverProfile

router.route("/updateDriverProfile/:id").put(async(req,res)=>{

    let id = req.params.id;

    const {password,address,phone,salaries,workinghours,startdate,resigndate} = req.body;

    const updateDriver = {
        password,
        address,
        phone,
        salaries,
        workinghours,
        startdate,
        resigndate
    }

    const update = await Driver.findByIdAndUpdate(id , updateDriver).then(()=>{
        res.status(200).send({ststus:"Details are updated"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with updating data",error:error.message});
    })  
})
////////////////////////////////////////////////////////////////////

//Route for DELETE a driver profile 
//==> http://localhost:8070/driverprofile/deleteDriverProfile

router.route("/deleteDriverProfile/:id").delete(async(req,res)=>{

    let id = req.params.id;

    await Driver.findByIdAndDelete(id).then(()=>{
        res.status(200).send({ststus:"Driver profile is deleted"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({ststus:"Error with deleteing profile",error:error.message});
    })  
})
////////////////////////////////////////////////////////////////////

module.exports = router;