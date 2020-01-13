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
        books: [],
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

        const books = this.state.books.filter(book => book.id !== id);

        this.setState({ books })

        const clickedBook = this.state.books.filter(book => book.id === id);


        if (clickedBook){

        API.saveBook({
             title: clickedBook[0].volumeInfo.title,
             author: clickedBook[0].volumeInfo.authors[0] ,
             publisher: clickedBook[0].volumeInfo.publisher,
             published_date : clickedBook[0].volumeInfo.publishedDate,
             description: clickedBook[0].volumeInfo.description,
             pages: clickedBook[0].volumeInfo.pageCount,
             category: clickedBook[0].volumeInfo.categories[0],
             rating: clickedBook[0].volumeInfo.averageRating,
             maturity: clickedBook[0].volumeInfo.maturityRating,
             image: clickedBook[0].volumeInfo.imageLinks.thumbnail,
             country: clickedBook[0].saleInfo.country,
             purchase_link: clickedBook[0].volumeInfo.infoLink,
             read_link: clickedBook[0].accessInfo.webReaderLink
        })
        .then(res => console.log("Book Saved"))
        .catch(err => console.log(err));
      }    
        
    }


    // method to sign out from book search page
    logout = () => {

        API.logout()
        .then(res => {
            window.location.replace("/")
            console.log("user logged out")})
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