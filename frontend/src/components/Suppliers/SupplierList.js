import axios from "axios";
import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import "./Supply.css";
import AdminNavBar from "../Admin/AdminNavBar";

const SupplierList = () => {
  const getUrl = "/supply/getSuppliers";
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log(res);
        setSuppliers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const deleteHandler = (id) => {
    const deleteUrl = `http://localhost:5000/supply/${id}`;
    axios.delete(deleteUrl).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
  <AdminNavBar/>
  
      
      <div
        className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
        style={{ height: "93vh" }}
      >
        <h3 className="content-section1 m-0">Suppliers Deatils</h3>

        <div className="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
        <div className="content-section3 pt-3 pb-3">
       
            <a
              className="btn btn-primary"
              type="button"
              href="/Admin/addSupplier"
            >
              Add supplier
            </a>

            <a
              className="btn btn-primary ms-5"
              type="button"
              href="/Admin/supplyReport"
            >
              Supplier Report
            </a>
         

          <form className="float-end">
            <div className="input-group">
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  placeholder="Search"
                  className="form-control key-input"
                />
              </div>
            </div>
          </form>
        </div>
        <Table className="table table-striped bg-white">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Supplier Name</th>
              <th>Supplier Address</th>
              <th>NIC</th>
              <th>Phone Number</th>
              <th>E-Mail</th>
              <th>Bank Account Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((suppliers) => (
              <tr key={suppliers._id}>
                <td>{suppliers._id}</td>
                <td>{suppliers.Supplyname}</td>
                <td>{suppliers.SupplyAddress}</td>
                <td>{suppliers.SupplyNic}</td>
                <td>{suppliers.SupplyPhoneNum}</td>
                <td>{suppliers.SupplyEmail}</td>
                <td>{suppliers.SupplyBankAccNum}</td>
                <td>
                  <LinkContainer to={`/Admin/editSupplier/${suppliers._id}`}>
                    <Button variant="light" className="btn-sm-up">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="btn-sm-dl"
                    onClick={() => deleteHandler(suppliers._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    
      </div>
    </>
  );
};

export default SupplierList;
