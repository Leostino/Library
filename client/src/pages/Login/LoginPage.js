import React from "react"

import "./LoginPage.css";

import LoginForm from "../../components/LoginForm"





// import LoginForm from "../../components/LoginForm"

class LoginPage extends React.Component {

    state = {
        email: "",
        password: ""
    }


    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
      
    };



    handleFormSubmit = event => {
        event.preventDefault();


    }

    
    render() {
        return (
            <LoginForm />

        )
    }
}


export default LoginPage;