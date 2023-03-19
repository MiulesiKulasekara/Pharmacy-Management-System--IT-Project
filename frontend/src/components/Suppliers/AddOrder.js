import React, { useState, useEffect } from "react";
import axios from "axios";
import FormContainer from "./formContainer";
import "./addSupplier";
import "./Supply.css";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminNavBar from "../Admin/AdminNavBar"

const AddOrder = () => {
  
  const getUrl = "/supply/getSuppliers";
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log(res);
        setSuppliers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const { id } = useParams();
  const [OrderInfo, setOrderInfo] = useState([]);
  const [ItemName, setItemName] = useState("");
  const [ItemID, setItemID] = useState("");
  const [ItemQuantity, setItemQuantity] = useState("");
  const [ItemSupplier, setItemSupplier] = useState("");
  const [ItemStatus, setItemStatus] = useState("");

  const getOrder = async (id) => {
    await axios
      .get(`/norder/getNoticebyId/${id}`)
      .then((res) => {
        console.log(res);
        setOrderInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (OrderInfo._id !== id) {
      getOrder(id);
    } else {
      setItemName(OrderInfo.ItemName);
      setItemID(OrderInfo.ItemID);
      setItemQuantity(OrderInfo.ItemQuantity);
      setItemSupplier(OrderInfo.ItemSupplier);
      setItemStatus(OrderInfo.ItemStatus);
    }
  }, [id, OrderInfo]);

  function submit(e) {
    try {
      e.preventDefault();
      axios
        .put(`/norder/updateNotice/${id}`, {
          ItemName,
          ItemID,
          ItemQuantity,
          ItemSupplier,
          ItemStatus,
        })
        .then((res) => {
          console.log(ItemName, ItemID, ItemQuantity, ItemSupplier, ItemStatus);
          alert("Order updated");
          window.location.href = "/Admin/smorderList";
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <AdminNavBar/>
    <div className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3" style={{'height': "93vh"}}>
      <div>
        <FormContainer className="container1">
          <h1 className="header1">ADD ORDER</h1>
          <dv> </dv>
          <dv></dv>

          <Form onSubmit={(e) => submit(e)}>
            <Form.Group className="inputField" controlId="ItemName">
              <Form.Label className="label11">Item Name</Form.Label>
              <Form.Control
                type="name"
                value={ItemName}
                onChange={(e) => setItemName(e.target.value)}
                readonly
              ></Form.Control>
            </Form.Group>

            <Form.Group className="inputField" controlId="ItemName">
              <Form.Label className="label11">Item ID</Form.Label>
              <Form.Control
                type="text"
                value={ItemID}
                onChange={(e) => setItemID(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="inputField" controlId="ItemQuantity">
              <Form.Label className="label11">Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={ItemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="inputField" controlId="Supplyname">
              <Form.Label className="label11">Supplier</Form.Label>
              <Form.Select
                value={ItemSupplier}
                onChange={(e) => setItemSupplier(e.target.value)}
              >
                {suppliers.map((suppliers) => (
                  <option value={suppliers.Supplyname}>
                    {suppliers.Supplyname}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputField" controlId="ItemStatus">
              <Form.Label className="label11">Status</Form.Label>
              <Form.Select
                value={ItemStatus}
                onChange={(e) => setItemStatus(e.target.value)}
              >
                <option value="pending">pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Canceled">Canceled</option>
              </Form.Select>
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
            <br></br>
            <br></br>
            <br></br>
          </Form>
        </FormContainer>
      </div>
      </div>
    </>
  );
};
export default AddOrder;
