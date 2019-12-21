// import components and react

import React from "react";

import NavBar from "../components/NavBar";

import BookResult from "../components/BookResult";

import API from "../utils/API";


// class for search page

class BookSearch extends React.Component {

    // state obj for input fields on search page

    state = {

        search: "",
        books: []
    }

    // load this after search page loads

    componentDidMount() {

        API.searchBook("becoming")
        .then(res => {
          console.log(res.data.items);
          this.setState({ books: res.data.items })
        })
        .catch(err => console.log(err));

    }



    search = query => {

        API.searchBook(query)
        .then(res => {
            console.log(res.data.items);
            this.setState({ books: res.data.items })
          })
          .catch(err => console.log(err));
    }


    // google sign out method

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

        event.preventDefault(); 


         // save what user typed in database when form submitted

        this.search(this.state.search)
        .then(res => {

          // clear input fields after form submission

          this.setState({ search: "" })
        
        
        
        })
      .catch(err => console.log(err));

    }

   
    // renders the search page using the required components

    render () {
        return (        
            <div id="search-page">
                
                <NavBar 
                search={this.state.search}
                logout={this.logout}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
            
                <BookResult 
                books={this.state.books}
                />
                

            </div>
        
         
        )
    }


}

export default BookSearch;