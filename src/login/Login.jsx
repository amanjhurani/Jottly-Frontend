import React from 'react';
import './Login.css';
import axios from "axios";

const baseURL = 'https://jottly-app.herokuapp.com/api/v1/user/login'

class Login extends React.Component{
    state={
        email:'',
        pwd:'',
        token: null,
        user: {}
    }

    createLogin = async () => {
        await axios
          .post(baseURL, {
            payload: {
                email: this.state.email,
                password: this.state.pwd
            }
          })
          .then((response) => {
            this.setState({
                token: response.data.token,
                user: response.data.user
            });
            localStorage.setItem("token", this.state.token);
            console.log(response.data.token, response.data.user)
          });
      }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        await this.createLogin();
        if(this.state.token != null) {
            this.props.isLogin(true, this.state.token);
        }
    }
    render(){
        return(
            <div className='div-login'>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;