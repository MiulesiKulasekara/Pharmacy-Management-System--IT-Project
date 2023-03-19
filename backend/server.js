const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); //use to configur .env file data https://www.npmjs.com/package/dotenv
const cors = require("cors");
const bodyparser = require("body-parser");
const expressSession = require("express-session");

SupplyRoutes =require( './routes/SupplyRoutes.js')
OrderNotice = require('./routes/OrderNotice.js')

inventoryRoutes = require('./routes/inventoryRoutes.js')
orderroutes = require('./routes/orderroutes.js')





const userRouter = require("./routes/userRouter");//http://localhost:8070/api/users
//USERS
const loginRouter = require("./routes/loginRouter")//http://localhost:8070/api/login
//ADMIN
const adminRouter = require("./routes/adminRouter");//http://localhost:8070/api/admin
const adminLoginRouter = require("./routes/adminLoginRouter")//http://localhost:8070/api/ladmin
const driverapplicationRouter = require("./routes/driveApplicationRouter");// ==> http://localhost:8070/driverapplications
const driverprofileRouter = require("./routes/driverProfileRouter");// ==> http://localhost:8070/driverprofile
const driverLoginRouter = require("./routes/driverLoginRouter");//http://localhost:8070/api/ldriver
const orderRouter = require("./routes/orderRouter");// ==> http://localhost:8070/order
const deliveryRouter = require("./routes/deliveryRouter");// ==> http://localhost:8070/delivery




dotenv.config();
const app = express();
app.use(bodyparser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
  path: "/",
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
  },
});

app.use(sessSettings);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_DEMO, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

app.use("/admin/sporder", require("./routes/SupplierOrderRoute"));
app.use("/admin/payment/empayment", require("./routes/EmployeePaymentRoute"));
app.use("/admin/payment/suppayment", require("./routes/SupplierPaymentRoute"));

app.use('/supply', SupplyRoutes)
app.use('/norder', OrderNotice)

app.use('/api/inventory', inventoryRoutes)
app.use('/order', orderroutes)


app.use("/api/users",userRouter);
app.use("/api/login",loginRouter);
app.use("/api/admin",adminRouter);
app.use("/api/ladmin", adminLoginRouter);
app.use("/driverapplications",driverapplicationRouter);
app.use("/driverprofile",driverprofileRouter);
app.use("/api/ldriver",driverLoginRouter);
app.use("/morder",orderRouter);
app.use("/delivery",deliveryRouter);

app.listen(PORT, () => {
  console.log(`Server is up an running on port: ${PORT}`);
});
