import React from "react";

import "./style.css";

import { Form, Button, Container, Row, Col } from "react-bootstrap";



function LoginForm(props) {
    return(


     <div id="login-container" className="d-flex justify-content-center align-items-center pt-5 pb-5">
          <div id="login-form" className="jumbotron shadow w-50 pl-5 mt-5 mb-5">
     <Form className="ml-5 pl-4">
         <Row>
             <Col md={10}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  </Col>

  </Row>

  <Row>

  <Col md={10}>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check className="d-inline" type="checkbox" label="Remember me" />
    <a className="float-right" href="">Forgot password</a>
  </Form.Group>

  </Col>
  </Row>
  <Row>
      <Col md={10}>
  <Button className="w-100" style={{ backgroundColor: "#007bff"}} variant="primary" type="submit">
    Submit
  </Button>
  </Col>
  </Row>
</Form>
</div>
</div>


    )
}


export default LoginForm;