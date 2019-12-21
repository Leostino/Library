import React from "react"

import RegisterForm from "../components/RegisterForm";

import API from "../utils/API";




class RegisterPage extends React.Component {

    state = {
        email: "",
        password: "",
        password2: "",
        message: ""
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

            this.setState({message: "Check your password, must be at least 6 characters!"})

        }else if(this.state.password !== this.state.password2) {

            this.setState({message: "Passwords don't match"});

        }else{

            API.register({

               email: validEmail,
               password: this.state.password

            }).then(user => {

                console.log("Register posted")

                if(!user) {

                    this.setState({message: "This email is not register"})

                }else if((user) && (user.password !== this.state.password)) {

                    this.setState({message: "Password is incorrect"})

                }

            })


        }       


    }


    render() {
        return (
        
            <RegisterForm
            email={this.state.email}
            password={this.state.password}
            password2={this.state.password2}
            message={this.state.message} 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
    

        )
    }
}


export default RegisterPage;