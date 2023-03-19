import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <>
      <div style={{paddingTop : "5vh"}}>
        <Row className="justify-content-md-center bg-white" style={{backgroundColor : "lightblue"}}>
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormContainer;
