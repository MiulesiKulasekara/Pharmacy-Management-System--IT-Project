import axios from "axios";
import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button} from "react-bootstrap";
import AdminNavBar from "../Admin/AdminNavBar";

const InventoryList = () => {
  const getUrl = "/api/inventory/getItem";
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log(res);
        setInventories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const deleteHandler = (id) => {
    const deleteUrl = `http://localhost:5000/api/inventory/${id}`;
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
        <h3 className="content-section1 m-0">Item details</h3>

        <div className="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
        <div className="content-section3 pt-3 pb-3">
       
            <a
              className="btn btn-primary"
              type="button"
              href="/Admin/addproduct"
            >
              Add Product
            </a>

            <a
              className="btn btn-primary ms-5"
              type="button"
              href="/Admin/InventryReport"
            >
              Report
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
        <Table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Company_Name</th>
              <th>Quantity</th>
              <th>ExpireDate</th>
              <th>Category</th>
              <th>Price</th>
              <th>E/D</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventories) => (
              <tr key={inventories._id}>
                <td>{inventories._id}</td>
                <td>{inventories.name}</td>
                <td>{inventories.companyName}</td>
                <td>{inventories.quantity}</td>
                <td>{inventories.expireDate.substring(0, 10)}</td>
                <td>{inventories.category}</td>
                <td>Rs. {inventories.price}/=</td>
                <td>
                  <LinkContainer to={`/Admin/updateItem/${inventories._id}`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(inventories._id)}
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

export default InventoryList;
