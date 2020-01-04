// import components and react

import React from "react";

import NavBar from "../components/NavBar";

import BookResult from "../components/BookResult";

import API from "../utils/API";

import { Container } from "react-bootstrap";


// class for search page

class BookSearch extends React.Component {

    // state obj for input fields on search page

    state = {

        search: "",
        books: []
    }

    // load this after search page loads

    componentDidMount() {

        // run check to backend authentication to see if user is logged in before viewing this page
        // if not load login page

        API.searchBook("becoming")
        .then(res => {
          console.log(res.data);
          this.setState({ books: res.data })
        })
        .catch(err => console.log(err));

    }



    // search for books method 
    search = query => {

        API.searchBook(query)
        .then(res => {
            console.log(res.data);
            this.setState({ 
                books: res.data,
                search: ""})
          })
          .catch(err => console.log(err));
    }


    // save book when save button clicked
    save = id => {

        // console.log("id" + id);
    if (this.state.books.indexOf(id) === -1){
        console.log("if1 " + id);
        console.log(this.state.books.indexOf(id));
        // console.log(`${this.state.books[0].volumeInfo.title}
        //          ${this.state.books[0].volumeInfo.authors} 
        //     ${this.state.books[0].volumeInfo.publisher}
        //     ${this.state.books[0].volumeInfo.publishedDate}
        //     ${this.state.books[0].volumeInfo.description}
        //     ${this.state.books[0].volumeInfo.pageCount}
        //     ${this.state.books[0].volumeInfo.categories}
        //     ${this.state.books[0].volumeInfo.averageRating}
        //     ${this.state.books[0].volumeInfo.maturityRating}
        //     ${this.state.books[0].volumeInfo.imageLinks.thumbnail}
        //     ${this.state.books[0].saleInfo.country}
        //     ${this.state.books[0].volumeInfo.infoLink}
        //     ${this.state.books[0].accessInfo.webReaderLink}`);
        

        // if ids match save book to database
        API.saveBook({
             title: this.state.books[0].volumeInfo.title,
             author: this.state.books[0].volumeInfo.authors[0] ,
             publisher:this.state.books[0].volumeInfo.publisher,
             published_date : this.state.books[0].volumeInfo.publishedDate,
             description: this.state.books[0].volumeInfo.description,
             pages: this.state.books[0].volumeInfo.pageCount,
             category: this.state.books[0].volumeInfo.categories[0],
             rating: this.state.books[0].volumeInfo.averageRating,
             maturity: this.state.books[0].volumeInfo.maturityRating,
             image: this.state.books[0].volumeInfo.imageLinks.thumbnail,
             country: this.state.books[0].saleInfo.country,
             purchase_link: this.state.books[0].volumeInfo.infoLink,
             read_link: this.state.books[0].accessInfo.webReaderLink
        })
        .then(res => console.log(res))
           .catch(err => console.log(err));
      }
      else{
        console.log("else " + id);
      }

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

        event.preventDefault(); 


         // save what user typed in database when form submitted

        this.search(this.state.search)
       

    }

   
    // renders the search page using the required components

    render () {
        return (        
            <div style={{ backgroundColor: "#6c757d"}}>
                
                <NavBar 
                search={this.state.search}
                logout={this.logout}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />

                <Container>
            
                <BookResult 
                books={this.state.books}
                save={this.save}
                />
                </Container>
                

            </div>
        
         
        )
    }


}

export default BookSearch;