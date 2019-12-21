import React from "react";

// import { Router, Link } from "react-router-dom";

import "./style.css";

import { Form, Button, Row, Col } from "react-bootstrap";

import Logo from "../Logo";

import LogoImage from "../../images.json"





function RegisterForm(props) {
    return(
     <div  id="login-container">

        <Logo 
         src={LogoImage[0].src}
         name={LogoImage[0].name}
        />

     <div className="d-flex justify-content-center align-items-center mt-n5 d-inline">
        <div id="login-form" className="jumbotron shadow w-50 pl-5 mt-5 mb-5">
            <Form className="ml-5 pl-4">
              <Row>
                <Col md={10}>
                    <Form.Group controlId="formBasicEmail">
                       <Form.Label htmlFor="email" id="email" className="font-weight-bold">Enter your email address</Form.Label>
                       <Form.Control 
                            id="email"
                          name="email" 
                          value={props.email} 
                          type="email" 
                          placeholder="Enter email"
                          onChange={props.handleInputChange}
                        />
                        <Form.Text className="text-muted font-weight-bold">
                          We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>

              </Row>

              <Row>

                <Col md={10}>

                   <Form.Group controlId="formBasicPassword">
                       <Form.Label id="password" className="font-weight-bold" htmlFor="password">Choose password</Form.Label>
                       <Form.Control 
                             id="password"
                           name="password"
                           value={props.password}
                           type="password" 
                           placeholder="Choose password" 
                           onChange={props.handleInputChange}
                        />
                        <Form.Text className="text-muted font-weight-bold">
                        Password must be at least 6 characters
                        </Form.Text>
                    </Form.Group>                    
                   
                </Col>
              </Row>
              <Row>

                <Col md={10}>

                   <Form.Group controlId="formBasicPassword">
                       <Form.Label id="password2" className="font-weight-bold" htmlFor="password2">Re-enter your password</Form.Label>
                       <Form.Control 
                             id="password2"
                           name="password2"
                           value={props.password2}
                           type="password" 
                           placeholder="Re-enter password" 
                           onChange={props.handleInputChange}
                        />
                    </Form.Group>
                   
                </Col>
              </Row>
              <Row>
                    <Col md={10}>
                          <p className="w-100 text-center mb-3 font-weight-bold">{props.message}</p>
                        <Button className="w-100 font-weight-bold" style={{ backgroundColor: "#007bff"}} onClick={props.handleFormSubmit} variant="primary" type="submit">
                           Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>

    </div>

)}


export default RegisterForm;