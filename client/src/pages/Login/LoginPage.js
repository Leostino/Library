import React from "react"

import "./LoginPage.css";

import LoginForm from "../../components/LoginForm";

import API from "../../utils/API";




class LoginPage extends React.Component {

    state = {
        email: "",
        password: "",
        message: ""
    }


    handleInputChange = event => {

        const { name, value } = event.target;

        console.log(event.target);

        this.setState({
            [name] : value
        })
      
    };



    handleFormSubmit = event => {

        event.preventDefault();

        // run some form authentication before posting

        console.log(this.state.email)
        console.log(this.state.password)

        API.login({

            email: this.state.email,
            password: this.state.password

        })
        .then(user => {

            if(!user) {

                this.setState({message: "This email is not register"})

            }else if((user) && (user.password !== this.state.password)) {

                this.setState({message: "Password is incorrect"})

            }

        })



    }


    render() {
        return (
        
            <LoginForm
            email={this.state.email}
            password={this.state.password}
            message={this.state.message} 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
    

        )
    }
}


export default LoginPage;