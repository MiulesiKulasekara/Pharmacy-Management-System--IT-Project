import React, { useState, useEffect } from "react";
import axios from "axios";
import FormContainer from "./formContainer";
import "./addSupplier";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminNavBar from "../Admin/AdminNavBar"

const UpdateSupplier = () => {
  const { id } = useParams();
  const [SupplierInfo, setSupplierInfo] = useState([]);
  const [Supplyname, setSupplyname] = useState("");
  const [SupplyAddress, setSupplyAddress] = useState("");
  const [SupplyNic, setSupplyNic] = useState("");
  const [SupplyPhoneNum, setSupplyPhoneNum] = useState("");
  const [SupplyEmail, setSupplyEmail] = useState("");
  const [SupplyBankAccNum, setSupplyBankAccNum] = useState("");

  const getSupplier = async (id) => {
    await axios
      .get(`/supply/${id}`)
      .then((res) => {
        console.log(res);
        setSupplierInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (SupplierInfo._id !== id) {
      getSupplier(id);
    } else {
      setSupplyname(SupplierInfo.Supplyname);
      setSupplyAddress(SupplierInfo.SupplyAddress);
      setSupplyNic(SupplierInfo.SupplyNic);
      setSupplyPhoneNum(SupplierInfo.SupplyPhoneNum);
      setSupplyEmail(SupplierInfo.SupplyEmail);
      setSupplyBankAccNum(SupplierInfo.SupplyBankAccNum);
    }
  }, [id, SupplierInfo]);

  function submit(e) {
    try {
      e.preventDefault();
      axios
        .put(`/supply/${id}`, {
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
          alert("Supplier updated");
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
      <FormContainer>
        <h1 className="header1">UPDATE SUPPLIER</h1>

        <Form onSubmit={(e) => submit(e)}>
          <Form.Group className="inputField" controlId="Supplyname">
            <Form.Label className="label11">Supplier Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={Supplyname}
              onChange={(e) => setSupplyname(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="SupplyAddress">
            <Form.Label className="label11">Supplier Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={SupplyAddress}
              onChange={(e) => setSupplyAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="SupplyNic">
            <Form.Label className="label11">NIC</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Nic"
              value={SupplyNic}
              onChange={(e) => setSupplyNic(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="SupplyPhoneNum">
            <Form.Label className="label11">Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              value={SupplyPhoneNum}
              onChange={(e) => setSupplyPhoneNum(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="SupplyEmail">
            <Form.Label className="label11">E-Mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter E-Mail"
              value={SupplyEmail}
              onChange={(e) => setSupplyEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="SupplyBankAccNum">
            <Form.Label className="label11">Bank Account Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Bank Account Number"
              value={SupplyBankAccNum}
              onChange={(e) => setSupplyBankAccNum(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Button
            type="submit"
            variant="primary"
            style={{ width: "100%", height: "35px" }}
            className="btnsubmit"
          >
            UPDATE
          </Button>
          <br></br>
        </Form>
      </FormContainer>
      </div>
    </>
  );
};
export default UpdateSupplier;
