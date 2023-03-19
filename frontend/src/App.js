import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//common components
import Navbar from "./components/Navbar/NavigationBar";
import Footer from "./Footer";
import Dasboard from "./components/Admin/AdminDashboard";

//imash
import Employeepayment from "./components/Payments/EmployeePayment";
import SupplierOrders from "./components/Suppliers/supplierOrders";
import SupplierPayment from "./components/Payments/SupplierPayment";
import Homepage from "./components/Homepage/Homepage";


//chandeep
import AddSupplier from "./components/Suppliers/addSupplier";
import SupplyList from "./components/Suppliers/SupplierList";
import UpdateSupplier from "./components/Suppliers/updateSupplier";
import AddOrder from "./components/Suppliers/AddOrder";
import SMOrderList from "./components/Suppliers/SMOrderList";
import SupplyReport from "./components/Suppliers/suppliersReport";


//ashan
import InventoryList from "./components/Inventory/inventoryList";
import UpdateItem from "./components/Inventory/updateItem";
import InventoryReport from "./components/Inventory/inventoryReport";
import AddproductOrder from "./components/Inventory/addOrder";
import AddItem from "./components/Inventory/addItem";

//miulesi
import AdminLogin from "./components/Admin/AdminLogin";
import DriverLogin from "./components/Delivery/driverLogin";
import AddDriverApplication from "./components/Delivery/Add_driverApplication";
import ViewAllApplications from "./components/Delivery/Veiw_allApplications";
import ViewAllOrders from "./components/Delivery/View_allOrders";
import ViewAlldeliveries from "./components/Delivery/View_allDeliveries";
import DriverProfiles from "./components/Delivery/View_allProfiles";
import Driver_profiles from "./components/Delivery/Driver_profile";

import "./components/Navbar/navigationStyle.css";
import "./components/Users/userStyle.css";
import "./components/sidebarStyle.css";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/Admin" element={<Dasboard />} />


        {/*---------------------------- Imash ---------------------------------*/}

        <Route path="/Admin/supplierpayments" element={<SupplierPayment />} />
        <Route path="/Admin/employeepayments" element={<Employeepayment />} />
        <Route path="/Admin/suplierOrder" element={<SupplierOrders />} />

         {/*---------------------------- Chandeep ---------------------------------*/}

        <Route path="/Admin/addSupplier" element={<AddSupplier />} />
        <Route path="/Admin/editSupplier/:id" element={<UpdateSupplier />} />
        <Route path="/Admin/suppliers" element={<SupplyList />} />

        <Route path="/Admin/addSupplierOrder/:id" element={<AddOrder />} />
        <Route path="/Admin/smorderList" element={<SMOrderList />} />
        <Route path="/Admin/supplyReport" element={<SupplyReport />} />

         {/*---------------------------- Ashan ---------------------------------*/}

        <Route path="/Admin/addproduct" element={<AddItem />} />
        <Route path="/Admin/productlist" element={<InventoryList />} />
        <Route path="/Admin/updateItem/:id" element={<UpdateItem />} />
        <Route path="/Admin/InventryReport" element={<InventoryReport />} />
        <Route path="/Admin/addproductorder" element={<AddproductOrder />} />

        {/* -----------------------------miulesi--------------------------------- */}
        <Route path="/AdminLogin" element={<AdminLogin />} />  
        <Route path="/DriverLogin" element={<DriverLogin />} />
        <Route path="/addAplication" element={<AddDriverApplication />} />
        <Route path="/viewAplications" element={<ViewAllApplications />} />
        <Route path="/viewOrders" element={<ViewAllOrders />} />
        <Route path="/viewdeliveries" element={<ViewAlldeliveries />} />
        {/* <Route path="/driverProfiles" element={<DriverProfiles />} /> */}
        <Route path="/mydriverProfiles/:id" element={<Driver_profiles />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
