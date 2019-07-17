import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../App/Config';
import Errors from '../../App/FormErrors';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            FormErrors: new Errors()
        }
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });

    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handlePasswordConfirmationChange(event) {
        this.setState({
            password_confirmation: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let attributes = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };

        this._register(attributes);
    }

    /**
     *
     * @param data
     * @private
     */
    _register(data) {

        const endpoint = `${config.remoteBaseUrl}/register`;

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        axios.post(endpoint, data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => console.log(response))
        .catch(error =>{
            if(error.response.data) {
               
            }
        });

    }

    render() {
        return (
            <div className="row my-4">
                <form className="col-md-6 row mx-auto" onSubmit={(event) => this.handleFormSubmit(event)} method="POST">
                    <h2 className="text-center col-md-12 mt-2">Sign up</h2>
                    <div className="form-group col-md-12">
                        <label htmlFor="name">Your name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                               placeholder="Enter your name" onChange={(event) => this.handleNameChange(event)} value={this.state.name}/>

                        {/*<small id="emailHelp" className="form-text text-muted">*/}
                        {/*Lorem*/}
                        {/*</small>*/}

                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" onChange={(event) => this.handleEmailChange(event)} value={this.state.email} />
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone*/}
                        {/*else.*/}
                        {/*</small>*/}
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password"
                               value={this.state.password} onChange={ (event) => this.handlePasswordChange(event) }
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="password_confirmation">Password (Confirmation)</label>
                        <input type="password" className="form-control" id="password_confirmation"
                               placeholder="Re-enter your password"
                               value={ this.state.password_confirmation } onChange={ (event) => this.handlePasswordConfirmationChange(event) }
                        />
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-outline-info btn-lg">Sign up</button>
                    </div>
                </form>

            </div>
        )
    }

}


export default SignUp;