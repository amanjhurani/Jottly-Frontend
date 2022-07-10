import React from 'react';
import './Login.css';
import axios from "axios";

const baseURL = 'https://jottly-app.herokuapp.com/api/v1/user'

class Login extends React.Component{
    state={
        email:'',
        pwd:'',
        name: '',
        contact: '',
        token: null,
        user: {}
    }

    createLogin = async () => {
        await axios
          .post(baseURL + '/login', {
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
          }).catch((response) => {
            alert(response.response.data.msg)
          });
      }

      createRegistration = async () => {
        await axios
          .post(baseURL + '/register', {
            payload: {
                email: this.state.email,
                password: this.state.pwd,
                name: this.state.name,
                phone: this.state.contact
            }
          })
          .then((response) => {
            this.setState({
                token: response.data.token,
                user: response.data.user
            });
            localStorage.setItem("token", this.state.token);
          }).catch((response) => {
            alert(response.response.data.msg)
          });
      }

    

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleLoginSubmit = async (e) =>{
        e.preventDefault()
        await this.createLogin();
        if(this.state.token != null) {
            this.props.isLogin(true, this.state.token);
        }
    }
    handleRegSubmit = async (e) =>{
        e.preventDefault()
        await this.createRegistration();
        if(this.state.token != null) {
            this.props.isLogin(true, this.state.token);
        }
    }
    render(){
        return(
            <div className='auth'>
                <div className='login'>
                    <h1>Login</h1>
                    <form onSubmit = {this.handleLoginSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleLoginSubmit}>Log In</button>
                    </form>
                </div>

                <div className='register'>
                    <h1>Register</h1>
                    <form onSubmit = {this.handleRegSubmit}>
                    <input type='text' name='name' placeholder='name...' required onChange={this.handleChange}/>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='text' name='contact' placeholder='contact...' minLength="10" maxLength="10" onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleRegSubmit}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;