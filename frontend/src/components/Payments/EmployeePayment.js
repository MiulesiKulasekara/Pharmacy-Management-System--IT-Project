import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import AdminNavBar from "../Admin/AdminNavBar";
import { PDFExport } from "@progress/kendo-react-pdf";

axios.defaults.baseURL = "http://localhost:5000";

function EmployeePayment() {
  const [empPayments, setEmpPayment] = useState([]);
  const [paymentid, setpaymentid] = useState("");
  const [EMPID, setempid] = useState("");
  const [EMPName, setempname] = useState("");
  const [EMPDate, setdate] = useState("");
  const [Amount, setamount] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [onclickDeleteid,setdeleteId] = useState("");

  function submitHandle(e) {
    e.preventDefault();

    const paymetdel = {
      EMPID,
      EMPName,
      EMPDate,
      Amount,
    };

    axios
      .post(`/admin/payment/empayment/add`, paymetdel)
      .then((res) => {
        alert("successfully uploaded");
        window.location.reload(true);
        console.log(paymetdel);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteHandle = (e) => {
    axios
      .delete("/admin/payment/empayment/delete/" + e)
      .then(() => {
        console.log("delete success" + e);
        alert("delete Successfull")
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const seteditForm = (e) => {
    axios.get("/admin/payment/empayment/single/" + e).then((res) => {
      setpaymentid(e);
      setempid(res.data.EMPID);
      setempname(res.data.EMPName);
      setdate(res.data.EMPDate);
      setamount(res.data.Amount);

      console.log(res.data.EMPID);
      console.log(paymentid);
    });
  };

  const updateHandle = (e) => {
    e.preventDefault();

    const editpaymetdel = {
      EMPID,
      EMPName,
      EMPDate,
      Amount,
    };

    axios
      .put("/admin/payment/empayment/update/" + paymentid, editpaymetdel)
      .then((res) => {
        alert("update successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`/admin/payment/empayment/all`)
      .then((res) => {
        setEmpPayment(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const pdfExportComponent = useRef(null)

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save()
    }

  return (
    <div>
      <AdminNavBar />

      <div>
        <div
          className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
          style={{ height: "93vh" }}
        >
          <h3 className="content-section1 m-0">Employee salary Payment</h3>

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
              Add a payment
            </a>

            <button className="btn btn-primary ms-5" onClick={handleExportWithComponent}>Generate Report</button>

            <form className="float-end">
              <div className="input-group">
                <div className="form-outline">
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="search"
                    id="form1"
                    placeholder="Search"
                    className="form-control key-input"
                  />
                </div>
              </div>
            </form>
          </div>
          <PDFExport ref={pdfExportComponent} paperSize="A3" margin='100'>
          <div className="bg-white content-section4">
            <table className="table table-striped">
              <thead className="table-dark position-sticky top-0">
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {empPayments &&
                  empPayments
                    .filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.EMPName.toLowerCase().includes(
                          searchTerm.toLowerCase()
                        )
                      ) {
                        return val;
                      }
                    })
                    .map((e) => {
                      return (
                        <tr>
                          <td scope="row">{e.EMPID}</td>
                          <td>{e.EMPName}</td>
                          <td>{e.EMPDate}</td>
                          <td>{e.Amount}</td>
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
                                  <a className="dropdown-item" href="#">
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#update-form"
                                    onClick={() => seteditForm(e._id)}
                                  >
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteAlert"  
                                    onClick={()=> setdeleteId(e._id)}  
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
          </PDFExport>
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
                <h4>Add a Payment</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Employee ID
                    </lable>
                    <input
                      onChange={(e) => setempid(e.target.value)}
                      type="text"
                      className="form-control"
                      id="empid"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Employee Name
                    </lable>
                    <input
                      onChange={(e) => setempname(e.target.value)}
                      type="text"
                      className="form-control"
                      id="empname"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Date
                    </lable>
                    <input
                      onChange={(e) => setdate(e.target.value)}
                      type="date"
                      className="form-control"
                      id="date"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Amount
                    </lable>
                    <input
                      onChange={(e) => setamount(e.target.value)}
                      type="text"
                      className="form-control"
                      id="amount"
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
                        type="submit"
                        className="btn btn-primary"
                        onClick={submitHandle}
                        id="paymentIDInput"
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
                <h4>Update the Payment</h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Employee ID
                    </lable>
                    <input
                      value={EMPID}
                      onChange={(e) => setempid(e.target.value)}
                      type="text"
                      className="form-control"
                      id="empid"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Employee Name
                    </lable>
                    <input
                      value={EMPName}
                      onChange={(e) => setempname(e.target.value)}
                      type="text"
                      className="form-control"
                      id="empname"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Date
                    </lable>
                    <input
                      value={EMPDate}
                      onChange={(e) => setdate(e.target.value)}
                      type="date"
                      className="form-control"
                      id="date"
                      required
                    ></input>
                  </div>
                  <div className="mb-3">
                    <lable for="paymentIDInput" className="form-lable">
                      Amount
                    </lable>
                    <input
                      value={Amount}
                      onChange={(e) => setamount(e.target.value)}
                      type="text"
                      className="form-control"
                      id="amount"
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
                        value="Update"
                        type="submit"
                        className="btn btn-primary"
                        onClick={updateHandle}
                        id="paymentIDInput"
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
              <div class="modal-body">Are you sure you want to delete this payment?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" class="btn btn-danger" onClick={()=>deleteHandle(onclickDeleteid)}>
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

export default EmployeePayment;
