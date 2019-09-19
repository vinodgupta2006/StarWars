import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import styles from '../styles/style.css';

class Login extends Component {
     constructor(props) {
      super(props);
      
      this.state = {
         data: [],
         email: '',
         psw: '',
      }
     }
    
    setEmail = (e) => {
        console.log('setEmail');
        this.setState({
            email: e.target.value,
        });
    }

    setPassword = (e) => {
        console.log('setPassword');
        this.setState({
            psw: e.target.value,
        });
    }

    onLogin = () => {
        const { email, psw } = this.state
        console.log('onLogin');
        console.log(this.state.email);
        console.log(this.state.psw);

        fetch('https://swapi.co/api/people/1/').then(response =>  response.json())
        .then(resData => {
           this.setState({ data: resData }); //this is an asynchronous function
           console.log(this.state.data);
           const { name, birth_year} = this.state.data ;
           if(email === name && psw === birth_year){
                window.location.href('/home');
           }
        });
    }

   render() {
      return (
        <div>
            <h2>Login</h2>
            <div class="container">
                <div class="row">
                    <div class="col-25">
                        {/* <label for="email">Email</label> */}
                    </div>
                    <div class="col-75">
                        <input type="email" name="email" placeholder="email" onChange = {this.setEmail} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        {/* <label for="lname">Password</label> */}
                    </div>
                    <div class="col-75">
                        <input type="password" name="password" id="lname" placeholder="password" onChange = {this.setPassword} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-btn">
                        <input type="submit" value="Submit" onClick = {this.onLogin} />
                    </div>
                </div>
            </div>
        </div>
      );
   }
}
export default Login;