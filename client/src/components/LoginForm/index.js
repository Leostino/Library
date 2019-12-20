import React from "react";

import { Router, Link } from "react-router-dom";

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
                       <Form.Label htmlFor="email">Email address</Form.Label>
                       <Form.Control 
                          name="email" 
                          value={props.email} 
                          type="email" 
                          placeholder="Enter email"
                          onChange={props.handleInputChange}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>

              </Row>

              <Row>

                <Col md={10}>

                   <Form.Group controlId="formBasicPassword">
                       <Form.Label htmlFor="password">Password</Form.Label>
                       <Form.Control 
                           name="password"
                           value={props.password}
                           type="password" 
                           placeholder="Password" 
                           onChange={props.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        
                        <a href="/view/register">Or Register User</a>
                        
                        <a className="float-right" href="">Forgot password</a>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                    <Col md={10}>
                        <Button className="w-100" style={{ backgroundColor: "#007bff"}} onClick={props.handleFormSubmit} variant="primary" type="submit">
                           Login
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>

)}


export default LoginForm;