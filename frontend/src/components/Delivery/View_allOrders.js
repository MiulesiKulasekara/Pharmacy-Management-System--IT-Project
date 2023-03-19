import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavBar from "../Admin/AdminNavBar"

export default function ViewAllOrders() {
  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [searchTearm, setSearchTearm] = useState("");

  const [id, setID] = useState("");
  const [cusName, setCusName] = useState("");
  const [drivername, setDrivername] = useState("");
  const [driverid, setDriverid] = useState("");
  const [address, setAddress] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [deliveredDate, setdeliveredDate] = useState("not set");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    function getOrders() {
      axios
        .get("http://localhost:5000/morder/viewOrder")
        .then((res) => {
          setOrders(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    }

    function getDrivers() {
      axios
        .get("http://localhost:5000/driverprofile/viewDriverProfiles")
        .then((res) => {
          setDrivers(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    getOrders();
    getDrivers();
  }, []);

  const setDeliveryForm = (e) => {
    axios.get("http://localhost:5000/morder/viewAorder/" + e).then((res) => {
      setID(e);
      setCusName(res.data.order.cusName);
      setAddress(res.data.order.address);
      setOrderDate(res.data.order.orderDate);
      console.log(res.data);
    });
  };

  const addOrderToDelivery = (e) => {
    e.preventDefault();

    const orderTodelivery = {
      cusName,
      address,
      deliveredDate,
      // orderDate,
      drivername,
      status,
      driverid
    };
    axios
      .post("http://localhost:5000/delivery/addDelivery", orderTodelivery)
      .then((res) => {
        alert("Delivery is created succsessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <AdminNavBar/>
    <div>
      <div
        class="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
        style={{ height: "93vh" }}
      >
        <h3 class="content-section1 m-0">Online Orders</h3>

        <div class="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
        <div class="content-section3 pt-3 pb-3">
          <form class="float-end">
            <div class="input-group">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  placeholder="Search"
                  class="form-control key-input"
                  onChange={(e) => setSearchTearm(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div class="bg-white content-section4">
          <table class="table table-striped">
            <thead class="table-dark position-sticky top-0">
              <tr>
                <th>Customer Name</th>
                <th>Customer Address</th>
                <th>Order Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders
                  .filter((val) => {
                    if (searchTearm == "") {
                      return val;
                    } else if (
                      val.cusName
                        .toLowerCase()
                        .includes(searchTearm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((e) => {
                    return (
                      <tr>
                        <td scope="row">{e.cusName}</td>
                        <td>{e.address}</td>
                        <td>{e.orderDate}</td>
                        <td>{e.status}</td>
                        <td>
                          <div class="dropdown-end">
                            <a
                              class=""
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <h6 class="material-symbols-outlined m-0">
                                more_vert
                              </h6>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-form"
                                  onClick={() => setDeliveryForm(e._id)}
                                >
                                  Add
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        id="add-form"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Add a Delivery</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Customer Name
                  </lable>
                  <input
                    value={cusName}
                    onChange={(e) => setCusName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Customer address
                  </lable>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                    id="address"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Order date
                  </lable>
                  <input
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    type="text"
                    className="form-control"
                    id="orderdate"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Status
                  </lable>
                  <input
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    type="text"
                    className="form-control"
                    id="status"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Driver ID
                  </lable>
                  <input type="text" className="form-control" id="did" onChange={(e) => setDriverid(e.target.value)}></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Driver name
                  </lable>
                  <input
                    type="text"
                    className="form-control"
                    id="dname"
                    onChange={(e) => setDrivername(e.target.value)}
                  ></input>
                </div>

                <div>
                  <table>
                    <tr>
                      <th>Driver Name</th>
                      
                      <th style={{paddingLeft : "50px"}}>Driver ID</th>
                    </tr>
                    {drivers &&
                      drivers.map((e) => {
                        return (
                          <tr>
                            <td>{e.name}</td>
                            <td  style={{paddingLeft : "50px"}}>{e._id}</td>
                          </tr>
                        );
                      })}
                  </table>
                </div>

                <div className="">
                  <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      onClick={addOrderToDelivery}
                      id="paymentIDInput"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
