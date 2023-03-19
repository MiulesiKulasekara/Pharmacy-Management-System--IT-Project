import AdminNavBar from "../Admin/AdminNavBar";
import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:5000";

function SupplierOrders() {
  const [sOrderDetails, setSOrderDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [btnstate,setbtnState] = useState(true);
  const [SPLID, setSPLID] = useState("");
  const [SName, setSName] = useState("");
  const [DaySMade, setDaySMade] = useState("");
  const [Amount, setAmount] = useState("");
  const [State, setState] = useState("Not done");

  //payment
  const [datepay, setdatepay] = useState("");
  const [paytype, setpaytype] = useState("");
  const [sOrderID, setsOrderID] = useState("");

  const [onclickDeleteid, setdeleteId] = useState("");

  useEffect(() => {
    axios
      .get(`/admin/sporder/all`)
      .then((res) => {
        setSOrderDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handlebtn(value) {
    if (value == "Done") {
      return true;
    } else {
      return false;
    }
  }

  const createOrder = () => {
    const sOrder = {
      SPLID,
      SName,
      DaySMade,
      Amount,
      State,
    };

    axios
      .post("/admin/sporder/add", sOrder)
      .then((res) => {
        alert("Supplier order created successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const deleteConfirm = (e) =>{

  // }

  const handleDelete = (e) => {
    axios
      .delete("/admin/sporder/delete/" + e)
      .then((res) => {
        alert("Supplier order successfully deleted!");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setSPaymentForm = (e) => {
    axios
      .get("/admin/sporder/single/" + e)
      .then((res) => {
        setsOrderID(e);
        setSPLID(res.data.SPLID);
        setSName(res.data.SName);
        setDaySMade(res.data.DaySMade);
        setAmount(res.data.Amount);
        setState("Done");

        console.log(res.data);

        console.log(res.data.SPLID);
        console.log(Amount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addAPayment = () => {
    const payment = {
      sOrderID,
      SName,
      Amount,
      datepay,
      State,
      paytype,
    };

    axios
      .post("/admin/payment/suppayment/add", payment)
      .then(() => {
        alert("Supplier payment successfully added!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateSOrder = () => {
    const uSOrder = {
      SPLID,
      SName,
      DaySMade,
      Amount,
      State,
    };

    axios
      .put("/admin/sporder/update/" + sOrderID, uSOrder)
      .then(() => {
        console.log("Order successfully uploaded!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToPayment = () => {
    addAPayment();
    updateSOrder();
  };

  return (
    <div>
      <AdminNavBar />

      <div>
        <div
          className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
          style={{ height: "93vh" }}
        >
          <h3 className="content-section1 m-0">Supplier Orders</h3>

          <div className="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
          <div className="content-section3 pt-3 pb-3">
            <a
              className="btn btn-primary"
              type="button"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#add-form"
            >
              <span className="material-symbols-outlined align-middle me-2 ">
                add
              </span>
              Add Order
            </a>

            <form className="float-end">
              <div className="input-group">
                <div className="form-outline">
                  <input
                    type="search"
                    id="form1"
                    placeholder="Search"
                    className="form-control key-input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-white content-section4">
            <table className="table table-striped">
              <thead className="table-dark position-sticky top-0">
                <tr>
                  <th>Supplier Name</th>
                  <th>Ordered Date</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sOrderDetails &&
                  sOrderDetails
                    .filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.State.toLowerCase().includes(
                          searchTerm.toLowerCase()
                        )
                      ) {
                        return val;
                      } else if (
                        val.SName.toLowerCase().includes(
                          searchTerm.toLowerCase()
                        )
                      ) {
                        return val;
                      }
                    })
                    .map((e) => {
                      return (
                        <tr>
                          <td>{e.SName}</td>
                          <td>{e.DaySMade}</td>
                          <td>{e.Amount}</td>
                          <td>{e.State}</td>
                          <td>
                            <div className="dropdown-end">
                              <a
                                className=""
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <h6 className="material-symbols-outlined m-0">
                                  more_vert
                                </h6>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    disabled={handlebtn(e.State)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#update-form"
                                    onClick={() => setSPaymentForm(e._id)}
                                  >
                                    Make payment
                                  </button>
                                </li>
                                <li>
                                  <a className="dropdown-item">Edit</a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteAlert"
                                    onClick={() => setdeleteId(e._id)}
                                  >
                                    Delete
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
                <h4>Add Supplier Order</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Supplier ID
                    </lable>
                    <input
                      type="text"
                      className="form-control"
                      id="empid"
                      onChange={(e) => setSPLID(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Supplier Name
                    </lable>
                    <input
                      type="text"
                      className="form-control"
                      id="empname"
                      onChange={(e) => setSName(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Date
                    </lable>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      onChange={(e) => setDaySMade(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Amount
                    </lable>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="hidden"
                      className="form-control"
                      id="sStatus"
                    />
                  </div>
                  <div className="">
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <input
                        value="Add"
                        type="submit"
                        className="btn btn-primary"
                        id="paymentIDInput"
                        onClick={createOrder}
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          id="update-form"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Add supplier Payment</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Date payment Do
                    </lable>
                    <input
                      type="date"
                      className="form-control"
                      id="empid"
                      onChange={(e) => setdatepay(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Payment type
                    </lable>
                    <input
                      type="text"
                      className="form-control"
                      id="empname"
                      onChange={(e) => setpaytype(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="">
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <input
                        value="Add"
                        type="submit"
                        className="btn btn-primary"
                        id="paymentIDInput"
                        onClick={handleAddToPayment}
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="deleteAlert"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Delete Confirmation
                </h5>
              </div>
              <div class="modal-body">
                Are you sure you want to delete this order?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleDelete(onclickDeleteid)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierOrders;
