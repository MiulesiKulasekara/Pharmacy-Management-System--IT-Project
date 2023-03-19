import axios from "axios";
import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";
import "./Supply.css";
import AdminNavBar from "../Admin/AdminNavBar";

const SMOrderList = () => {
  const getUrl = "/norder/getNotice";
  const [Notice, setNotice] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log(res);
        setNotice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <AdminNavBar />
      <div
        className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
        style={{ height: "93vh" }}
      >
        <h3 className="content-section1 m-0">Order Deatils</h3>

        <div className="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
        <div className="content-section3 pt-3 pb-3">

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
        <Table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Item ID</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Supplier</th>
              <th>EDIT ORDER</th>
            </tr>
          </thead>
          <tbody>
            {Notice.map((Notice) => (
              <tr key={Notice._id}>
                <td>{Notice._id}</td>
                <td>{Notice.ItemName}</td>
                <td>{Notice.ItemID}</td>
                <td>{Notice.ItemQuantity}</td>
                <td className="status">{Notice.ItemStatus}</td>
                <td>{Notice.ItemSupplier}</td>

                <td>
                  <LinkContainer to={`/Admin/addSupplierOrder/${Notice._id}`}>
                    <Button className="btn-sm-order">Edit Order</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SMOrderList;
