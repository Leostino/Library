// import axios

import axios from "axios";


export default {
    // USER ROUTES
    // login user

    login: function(loginData) {
        return axios.post("/users/login", loginData);
    },

    // register user

    register: function(registerData) {
        return axios.post("/users/register", registerData);
    },

    // logout user

    logout: function() {
        return axios.get("/users/logout");
    },

   // API ROUTES
  // Gets all books

  getBooks: function() {
    return axios.get("/api/books");
  },

  // Gets book with the id

  getBook: function(id) {
    return axios.get("/api/books/"+id);
  },

  // Deletes book with the id from database

  deleteBook: function(id) {
    return axios.delete("/api/book/"+id);
  },

  // Saves book to the database

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Edits book with the id

  editBook: function(id, bookData) {
    return axios.put("/api/books/"+id, bookData)
  },

  // query google books api for books

  searchBook: function(query) {

    return axios.get("https://www.googleapis.com/books/v1/volumes/?", { params: { q: query } });
  }
  
};