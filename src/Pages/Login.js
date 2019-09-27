import React, { Component } from 'react';
import Search from './Search'

class Login extends Component {
     constructor(props) {
      super(props);
      
      this.state = {
        data: [],
        email: '',
        psw: '',
        errorMessage: '',
        isLogin: true,
        apiCallMessage: ''
      }
     }
    
    setEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    setPassword = (e) => {
        this.setState({
            psw: e.target.value,
        });
    }

    onLogin = () => {
        const { email, psw } = this.state
        if(email === '' || psw === '' ){
            this.setState({
                errorMessage: 'Email and Password is required field', 
            });
            return;
        } else{
            this.setState({ errorMessage: '',
                apiCallMessage: 'Wait a moment....'
            });
        }

        fetch('https://swapi.co/api/people/1/').then(response =>  response.json())
        .then(resData => {
           this.setState({ data: resData }); //this is an asynchronous function
           const { name, birth_year} = this.state.data ;
           if(email === name && psw === birth_year){
            this.setState({ isLogin: false,
                errorMessage: '',
                apiCallMessage: ''
            });
           } else{
            this.setState({
                apiCallMessage: '',
                errorMessage: 'Email or Password is incorrect', 
            });
           }
        });
    }

    render() {
        const { errorMessage, isLogin, apiCallMessage } = this.state;
      return (
        <div>
            { isLogin ?
            <div>
            <h2>Login</h2>
            <div className="container">
            <div className="row error">{errorMessage}</div>
            <div className="row apiCallMsg">{apiCallMessage}</div>
                <div className="row">
                    <div className="col-25" />
                    <div className="col-75">
                        <input type="email" name="email" placeholder="email" onChange = {this.setEmail} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25" />
                    <div className="col-75">
                        <input type="password" name="password" id="lname" placeholder="password" onChange = {this.setPassword} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-btn">
                        <input type="submit" value="Submit" onClick = {this.onLogin} />
                    </div>
                </div>
            </div></div> : <Search /> }
        </div>
      );
   }
}
export default Login;