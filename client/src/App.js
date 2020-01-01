import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

 import LoginPage from "./pages/LoginPage";

import RegisterPage from "./pages/RegisterPage";

import BookSearch from "./pages/BookSearch";

import './App.css';

function App() {
  return (
  
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/search" component={BookSearch} />
        {/* <Route exact path="/view/pesa/:id" component={EditPage} />
        <Route exact path="/view/jobs" component={JobApi} /> */}
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
