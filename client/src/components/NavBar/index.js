// import react and other required components

import React from "react";

import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

import Logo from "../NewLogo";

import logoImage from "../../images.json";


// navbar component search, database and edit pages with sign out button

function NavBar (props) {
    return (
        
        <Navbar bg="primary" variant="dark">
        <Logo src={logoImage[0].src} name={logoImage[0].name} />
            
    <Navbar.Brand><h1 className="mb-n5 text-light font-weight-bold">Library</h1></Navbar.Brand>
    <Form inline className="mr-auto ml-auto mb-n5">
      <FormControl 
        type="text"
        id="search"
        name="search" 
        value={props.search}
        placeholder="Search for Books" 
        onChange={props.handleInputChange}
        className="mr-4" 
      />
      <Button variant="outline-light" onClick={props.handleFormSubmit}>Search</Button>
    </Form>
    <Nav className="mr-5">
      <Nav.Link href="#home"><h5 className="mb-n5 mt-3 text-light">Home</h5></Nav.Link>
      <Nav.Link href="#features"><h5 className="mb-n5 ml-3 mr-3 mt-3 text-light">Features</h5></Nav.Link>
      <Nav.Link href="#pricing"><h5 className="mb-n5 mt-3 text-light">Pricing</h5></Nav.Link>
    </Nav>
    

    <Button className="mr-4 mb-n5" onClick={props.logout} variant="outline-light">LogOut</Button>
  </Navbar>  
       
)}

export default NavBar;