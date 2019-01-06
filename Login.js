import React, { Component } from 'react';

import axios from 'axios';

class Login extends Component{
    state = {
        users: [

        ]
    }

    login = (e) => {

        axios
            .post('https://reqres.in/api/login', {
                email: this.state.email,
                password: this.state.password,
            })
            .then(res => {
                console.log(res)
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
               console.log(err);
           })

            e.preventDefault();
            e.target.reset();
    }

    iChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="myDiv">
                <form onSubmit={this.login} >
                    <input type="email" name="email" onChange={this.iChange} />
                    <input type="password" name="password" onChange={this.iChange} />
                    <button>Submit</button>
                </form>

                <p>token:{ this.state.tokendata }</p>
            </div>
        )
    }
}

export default Login;