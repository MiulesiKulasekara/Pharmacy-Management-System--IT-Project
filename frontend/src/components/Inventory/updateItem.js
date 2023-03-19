import React, { useState, useEffect } from "react";
import axios from "axios";
import FormContainer from "./formContainer";
import "./addItem.css";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminNavBar from "../Admin/AdminNavBar";

const UpdateItem = () => {
  const { id } = useParams();
  const [itemInfo, setItemInfo] = useState([]);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [expireDate, setExpireDate] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const getItem = async (id) => {
    await axios
      .get(`/api/inventory/${id}`)
      .then((res) => {
        console.log(res);
        setItemInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (itemInfo._id !== id) {
      getItem(id);
    } else {
      setName(itemInfo.name);
      setCompanyName(itemInfo.companyName);
      setQuantity(itemInfo.quantity);
      setExpireDate(itemInfo.expireDate);
      setCategory(itemInfo.category);
      setPrice(itemInfo.price);
    }
  }, [id, itemInfo]);

  function submit(e) {
    try {
      e.preventDefault();
      axios
        .put(`/api/inventory/${id}`, {
          name,
          companyName,
          quantity,
          expireDate,
          category,
          price,
        })
        .then((res) => {
          console.log(name, companyName, quantity, expireDate, category, price);
          alert("data updated");
          window.location.href = "/list";
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <AdminNavBar/>
    <div
        className="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3"
        style={{ height: "93vh" }}
      >
      <FormContainer>
        <h4>UPDATE INVENTORIES</h4>

        <Form onSubmit={(e) => submit(e)}>
          <Form.Group className="inputField" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="companyName">
            <Form.Label>Companey Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="date">
            <Form.Label>Expire Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter quantity"
              value={expireDate.substring(0, 10)}
              onChange={(e) => setExpireDate(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="inputField" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select>
              <option value="Gel">Gel</option>
              <option value="Syrup">Syrup</option>
              <option value="Tablet">Tablet</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Button
            type="submit"
            variant="primary"
            style={{ width: "100%", height: "35px" }}
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
export default UpdateItem;
