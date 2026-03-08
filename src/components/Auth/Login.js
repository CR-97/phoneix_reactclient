import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        if(document.getElementById("email").value == "" || 
        document.getElementById("password").value == ""){
            alert("Please Enter Email and Password")
            return false
        }else{
            login(user).then(res => {
                if (res) {
                    this.props.history.push(`/`);
                }
            })
        }

        
    }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 auth-card">
                        <h1>Sign In</h1>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block mt-3">
                                Sign In
                            </button>
                            <p className="text-center mt-3" style={{color:'#888', fontSize:'0.9rem'}}>
                                Don't have an account? <a href="/register" style={{color:'rgb(69,82,110)', fontWeight:'600'}}>Register</a>
                            </p>
                        </form>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Login