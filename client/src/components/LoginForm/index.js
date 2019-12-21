import React from "react";

import "./style.css";

import { Form, Button, Row, Col } from "react-bootstrap";

import Logo from "../Logo";

import LogoImage from "../../images.json"





function LoginForm(props) {
    return(
     <div  id="login-container">

        <Logo 
         src={LogoImage[0].src}
         name={LogoImage[0].name}
        />

     <div className="d-flex justify-content-center align-items-center d-inline mt-n5">
        <div id="login-form" className="jumbotron shadow w-50 pl-5 mt-5 mb-5">
            <Form className="ml-5 pl-4">
              <Row>
                <Col md={10}>
                    <Form.Group controlId="formBasicEmail">
                       <Form.Label htmlFor="email" id="email" className="font-weight-bold">Email address</Form.Label>
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
                       <Form.Label id="password" className="font-weight-bold" htmlFor="password">Password</Form.Label>
                       <Form.Control 
                             id="password"
                           name="password"
                           value={props.password}
                           type="password" 
                           placeholder="Password" 
                           onChange={props.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        
                        <a className="font-weight-bold" href="/view/register">Or Register User</a>
                        
                        <a className="float-right font-weight-bold" href="">Forgot password</a>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                    <Col md={10}>
                          <p className="w-100 text-center mb-3 font-weight-bold">{props.message}</p>
                        <Button className="w-100 font-weight-bold" style={{ backgroundColor: "#007bff"}} onClick={props.handleFormSubmit} variant="primary" type="submit">
                           Login
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>

    </div>

)}


export default LoginForm;