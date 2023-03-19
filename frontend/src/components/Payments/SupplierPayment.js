import AdminNavBar from "../Admin/AdminNavBar";
import React, { useEffect, useState,useRef} from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";


function SupplierPayment() {
  const [spayment, setpayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [onclickDeleteid, setdeleteId] = useState("");

  useEffect(() => {
    axios
      .get(`/admin/payment/suppayment/all`)
      .then((res) => {
        setpayments(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (e) => {
    axios
      .delete("/admin/payment/suppayment/delete/" + e)
      .then(() => {
        alert("Supplier order successfully deleted!");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <h3 className="content-section1 m-0">Supplier Payments</h3>

          <div className="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
          <div className="content-section3 pt-3 pb-3">

          <button className="btn btn-primary" onClick={handleExportWithComponent}>Generate Report</button>
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
          <PDFExport ref={pdfExportComponent} paperSize="A3" margin='100'>
            <table className="table table-striped">
              <thead className="table-dark position-sticky top-0">
                <tr>
                  <th>Supplier Name</th>
                  <th>Date payment Do</th>
                  <th>Amount</th>
                  <th>Payment method</th>
                  <th>Payment Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {spayment &&
                  spayment
                    .filter((val) => {
                      if (searchTerm == "") {
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
                          <td>{e.datepay}</td>
                          <td>{e.Amount}</td>
                          <td>{e.paytype}</td>
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
            </PDFExport>
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
                  Are you sure you want to delete this payment?
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
    </div>
  );
}

export default SupplierPayment;
