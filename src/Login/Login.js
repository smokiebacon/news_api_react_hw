import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleInput = (e) => {
        console.log(e.target.value);
        this.setState ({
        [e.target.name] : e.target.value
    })
}
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit hit')
        this.props.handleLogin(this.state.username);

    }
    render() {
        const { username, password } = this.state
        return (
        <div>
             <form onSubmit={this.handleSubmit}>
             <input type='text' name='username' onChange={this.handleInput} value={this.username} placeholder="username"/>
             <input type='password' name='password' onChange={this.handleInput} value={this.password} placeholder="password"/>
             <button type="Submit">Login </button>
             </form> 
         </div>
        )
    }
}


export default Login;