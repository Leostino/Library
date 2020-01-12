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

        this.getBooks();

    }



    getBooks = () => {

        API.getBooks()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
    }


    // method to delete book from database
    delete = id => {

        API.deleteBook(id)
        .then(res => this.getBooks())
        .catch(err => console.log(err))
    }


    


    // method to sign out from view page
    logout = () => {

        API.logout()
        .then(res => console.log("user logged out"))
        .catch(err => console.log(err));
    }


  


   
    // renders the search page using the required components

    render () {
        return (        
            <div style={{ backgroundColor: "white"}}>
                
                <ViewNav               
                logout={this.logout}
                />

                <Container style={{height: "auto"}}>
                    <div style={{backgroundColor: "#6c757d", marginTop: "40px", marginBottom: "40px"}}>
            
                 <MyBooks 
                 books={this.state.books}
                 delete={this.delete}
                 />
                 </div>
                
                </Container>
                

            </div>
        
         
        )
    }


}

export default ViewPage;