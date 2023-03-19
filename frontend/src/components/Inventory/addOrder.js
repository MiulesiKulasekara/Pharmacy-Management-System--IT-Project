import React, { useState } from "react";
import axios from "axios";
import FormContainer from "./formContainer";
import "./addItem.css";
import { Form, Button } from "react-bootstrap";
import AdminNavBar from "../Admin/AdminNavBar"

const AddOrder = () => {
  const url = "./order/addorder";
  const [itemname, setitemname] = useState("");
  const [itemnumber, setitemnumber] = useState("");
  const [quantity, setquantity] = useState("");

  function submit(e) {
    try {
      e.preventDefault();
      axios
        .post(url, {
          itemname,
          itemnumber,
          quantity,
        })
        .then((res) => {
          console.log(itemname, itemnumber, quantity);
          alert("data added");
          window.location.href = "/list";
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
        <h4>ADD ORDER</h4>

        <Form onSubmit={(e) => submit(e)}>
          <Form.Group className="inputField" controlId="itemname">
            <Form.Label>ITEM Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Item name"
              value={itemname}
              onChange={(e) => setitemname(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="itemnumber">
            <Form.Label>ITEM ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Item Number"
              value={itemnumber}
              onChange={(e) => setitemnumber(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <br></br>
          <Button
            type="submit"
            variant="primary"
            style={{ width: "100%", height: "35px" }}
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

export default AddOrder;
