// import components and react

import React from "react";

import ViewNav from "../components/ViewNav";

import MyBooks from "../components/MyBooks";

import API from "../utils/API";

import { Container } from "react-bootstrap";


// class for search page

class ViewPage extends React.Component {

    // state obj for input fields on search page

    state = {

        books: []

    }

    // load this after search page loads

    componentDidMount() {

        // run check to backend authentication to see if user is logged in before viewing this page
        // if not load login page

        API.getBooks()
        .then(res => {
          console.log(res.data);

           this.setState({ books: res.data })
        })
        .catch(err => console.log(err));

    }


    


    // sign out method
    logout = () => {
        API.logout()
        .then(res => console.log("user logged out"))
        .catch(err => console.log(err));
    }


    // handles changes in input fields when user types
    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
      
    };


    // handles form submission

    handleFormSubmit = event => {

        // prevent default form submission

       
       

    }

   
    // renders the search page using the required components

    render () {
        return (        
            <div style={{ backgroundColor: "white"}}>
                
                <ViewNav 
                search={this.state.search}
                logout={this.logout}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />

                <Container style={{height: "auto"}}>
                    <div style={{backgroundColor: "#6c757d", marginTop: "40px", marginBottom: "40px"}}>
            
                 <MyBooks 
                 books={this.state.books}
                 />
                 </div>
                
                </Container>
                

            </div>
        
         
        )
    }


}

export default ViewPage;