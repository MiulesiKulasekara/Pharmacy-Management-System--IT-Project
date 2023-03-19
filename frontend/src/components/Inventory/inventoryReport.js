import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { PDFExport } from "@progress/kendo-react-pdf";
import AdminNavBar from "../Admin/AdminNavBar";

const InventoryReport = () => {
  let count = 1;
  let tot = 0;

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
  });

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <>
     <AdminNavBar/>
      <div className="ps-5 pe-5 pt-3 contentx" style={{ height: "93vh" }}>
        <div >
          <Row className="mb-2" style={{ float: "left" }}>
            <Col className="">
              <Button
                onClick={handleExportWithComponent}
              >
                Generate Report
              </Button>
            </Col>
          </Row>
        </div>
        <PDFExport ref={pdfExportComponent} paperSize="A3" margin="100">
          
           
            <Table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Company_Name</th>
                  <th>Quantity</th>
                  <th>ExpireDate</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {inventories.map((inventories) => (
                  <tr key={inventories._id}>
                    <td>{(tot = count++)}</td>
                    <td>{inventories.name}</td>
                    <td>{inventories.companyName}</td>
                    <td>{inventories.quantity}</td>
                    <td>{inventories.expireDate.substring(0, 10)}</td>
                    <td>{inventories.category}</td>
                    <td>Rs. {inventories.price}/=</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="pp">
              <b>Total Number of Items: {tot}</b>
            </p>
          
        </PDFExport>
      </div>
    </>
  );
};

export default InventoryReport;
