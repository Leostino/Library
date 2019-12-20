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

    logout: function() {
        return axios.get("/users/logout");
    },

   // API ROUTES
  // Gets all books

  getBooks: function() {
    return axios.get("/api/books");
  },

  // Gets book with the given id

  getBook: function(id) {
    return axios.get("/api/books/"+id);
  },

  // Deletes book with the given id from database

  deleteJob: function(id) {
    return axios.delete("/api/book/"+id);
  },

  // Saves job to the database

  saveJob: function(jobData) {
    return axios.post("/books", jobData);
  },

  // Edits job with the given id saved in database

  editJob: function(id, jobData) {
    return axios.put("/api/books/"+id, jobData)
  },

  // query job api for jobs

  search: function(search, location) {

    const api_key = "72423555f215d5d8c1fbe985a57e35bd";

    const endPoint = "https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key="+ api_key +"&method=aj.jobs.search&keywords="+ search +"&perpage=10&location="+ location +"&format=json"

    return axios.get(endPoint)
  }
  
};