import React from 'react';
import axios from 'axios';
import config from '../../Services/Config';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {
                email: [],
                password: [],
            }
        }
    }

    componentDidMount() {
        document.title = "Login | Forum";
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

    handleFormSubmit(event) {
        event.preventDefault();
        let attributes = {
            email: this.state.email,
            password: this.state.password,
        };

        this._login(attributes);
    }


    /**
     *
     * @param data
     * @private
     */
    _login(data) {

        const endpoint = `${config.remoteBaseUrl}/login`;

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        this.setState({
            errors:  {
                email: [],
                password: [],
            },
            loading: true
        });

        axios.post(endpoint, data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(({ data : authInfos }) => {

            this.props.dispatch({type: "LOGIN", value: authInfos.data});
            this.props.dispatch(
                {
                    type: "SHOW_FLASH",
                    value: { message: 'You are logged in successfully'}
                }
            );

            this.setState({
                email: '',
                password: '',
            }, () => {
                this.props.history.push('/')
            });


        })
        .catch(error =>{
            if(error.response.data) {
                this.setState((prevState) => {
                    return {
                       errors: {...prevState.errors, ...error.response.data.errors }
                    }
                });
            }
        })
        .finally(() => this.setState({ loading: false}))
    }

    render() {
        const { Middleware : AuthMiddleware } =  this.props;
        return (
            <AuthMiddleware>
                <div className="row my-4">
                    <form className="col-md-6 row mx-auto mt-2" onSubmit={(event) => this.handleFormSubmit(event)} method="POST">
                        <h2 className="text-center col-md-12 mt-2">Login</h2>

                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="Enter email" onChange={(event) => this.handleEmailChange(event)} value={this.state.email} />
                            { this.state.errors['email'][0] &&
                            <small id="emailHelp" className="form-text text-danger">
                                { this.state.errors['email'][0] }
                            </small>
                            }
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"
                                   value={this.state.password} onChange={ (event) => this.handlePasswordChange(event) }
                            />
                            { this.state.errors['password'][0] &&
                            <small id="emailHelp" className="form-text text-danger">
                                { this.state.errors['password'][0] }
                            </small>
                            }
                        </div>

                        <div className="col-md-12">
                            <button type="submit" className="btn btn-outline-info btn-lg">
                                { this.state.loading ? 'Submitting...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </AuthMiddleware>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
};
export default connect(mapStateToProps)(
    withRouter(Login)
);
