import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Table } from "react-bootstrap";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./Supply.css";
import AdminNavBar from "../Admin/AdminNavBar";

const SupplyReport = () => {
  let count = 1;
  let tot = 0;

  const getUrl = "/supply/getSuppliers";
  const [Supplyreport, setSupplyreport] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log(res);
        setSupplyreport(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <>
    <AdminNavBar/>
      
      <div
        className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
        style={{ height: "93vh" }}
      >
        <h3 className="content-section1 m-0">Supplier Report</h3>

        <div className="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
        <div className="content-section3 pt-3 pb-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleExportWithComponent}
          >
            Generate Report
          </button>

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
        <div>
          <div></div>
          <PDFExport ref={pdfExportComponent} paperSize="A3" margin="100">
            <div >
              <Table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Supplier Name</th>
                    <th>Supplier Address</th>
                    <th>Supplier NIC</th>
                    <th>Supplier Phone Number</th>
                    <th>Suplier E-Mail</th>
                    <th>Suplier Bank Acc. Number</th>
                  </tr>
                </thead>
                <tbody>
                  {Supplyreport.map((Supplyreport) => (
                    <tr key={Supplyreport._id}>
                      <td>{(tot = count++)}</td>
                      <td>{Supplyreport.Supplyname}</td>
                      <td>{Supplyreport.SupplyAddress}</td>
                      <td>{Supplyreport.SupplyNic}</td>
                      <td>{Supplyreport.SupplyPhoneNum}</td>
                      <td>{Supplyreport.SupplyEmail}</td>
                      <td>{Supplyreport.SupplyBankAccNum}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p className="pp">
                <b>Total Number of Suppliers: {tot}</b>
              </p>
            </div>
          </PDFExport>
        </div>
      </div>
    </>
  );
};

export default SupplyReport;
