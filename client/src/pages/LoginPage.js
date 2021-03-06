import React from "react"

import LoginForm from "../components/LoginForm";

import API from "../utils/API";




class LoginPage extends React.Component {

    state = {
        email: "",
        password: "",
        message: ""
    }

    componentDidMount() {
        
    }


    ValidateEmail = email => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return email;
        }
        
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

        let validEmail = this.ValidateEmail(this.state.email);


        if(!validEmail) {

            this.setState({message: "You have entered an invalid email address!"})

        }else if(this.state.password.length < 6) {

            this.setState({message: "Check your password!"})

        }else{

           API.login({

               email: validEmail,
               password: this.state.password

            }).then(res => window.location.replace("/search"))
            .catch(err => this.setState({message: "Your email or password is incorrect"}))


        }       


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