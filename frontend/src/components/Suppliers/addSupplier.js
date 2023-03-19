import React, { useState } from "react";
import axios from "axios";
import FormContainer from "./formContainer";
import "./addSupplier.css";
import { Form, Button } from "react-bootstrap";
import "./Supply.css";
import AdminNavBar from "../Admin/AdminNavBar"

const AddSupplier = () => {
  const url = "/supply/addSupplier";
  const [Supplyname, setSupplyname] = useState("");
  const [SupplyAddress, setSupplyAddress] = useState("");
  const [SupplyNic, setSupplyNic] = useState("");
  const [SupplyPhoneNum, setSupplyPhoneNum] = useState("");
  const [SupplyEmail, setSupplyEmail] = useState("");
  const [SupplyBankAccNum, setSupplyBankAccNum] = useState("");

  function submit(e) {
    try {
      e.preventDefault();
      axios
        .post(url, {
          Supplyname,
          SupplyAddress,
          SupplyNic,
          SupplyPhoneNum,
          SupplyEmail,
          SupplyBankAccNum,
        })
        .then((res) => {
          console.log(
            Supplyname,
            SupplyAddress,
            SupplyNic,
            SupplyPhoneNum,
            SupplyEmail,
            SupplyBankAccNum
          );
          alert("data added");
          window.location.href = "/Admin/suppliers";
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     <AdminNavBar/>
    <div className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3" style={{'height': "93vh"}}>
        
        
        
      <FormContainer className="container1">
        <h1 className="header1">ADD SUPPLIER</h1>

        <Form onSubmit={(e) => submit(e)}>
          <Form.Group className="inputField" controlId="name">
            <Form.Label className="label11">Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Supplier name"
              value={Supplyname}
              onChange={(e) => setSupplyname(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="address">
            <Form.Label className="label11">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={SupplyAddress}
              onChange={(e) => setSupplyAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="Nic">
            <Form.Label className="label11">NIC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Nic"
              value={SupplyNic}
              onChange={(e) => setSupplyNic(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="PhoneNum">
            <Form.Label className="label11">Phone Number</Form.Label>
            <Form.Control
              pattern="[0-9]{3}"
              type="number"
              placeholder="Enter Phone Number"
              value={SupplyPhoneNum}
              onChange={(e) => setSupplyPhoneNum(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="email">
            <Form.Label className="label11">E-Mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter E-Mail"
              value={SupplyEmail}
              onChange={(e) => setSupplyEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="accNum">
            <Form.Label className="label11">Bank Account Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Price"
              value={SupplyBankAccNum}
              onChange={(e) => setSupplyBankAccNum(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Button
            type="submit"
            variant="primary"
            style={{ width: "100%", height: "35px" }}
            className="btnsubmit"
          >
            ADD
          </Button>
          <br></br>
        </Form>
      </FormContainer>
      </div>
    </>
  );
};

export default AddSupplier;
