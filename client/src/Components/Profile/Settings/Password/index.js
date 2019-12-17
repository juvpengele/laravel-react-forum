import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Config from '../../../../Services/Config';

function Password(props) {
    const [loader, setLoader] = useState(false);
    const [previousPassword, setPreviousPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState({
        previous_password: null,
        password: null,
        password_confirmation: null
    });

    function handleFormSubmit() {
        setLoader(true);

        axios.put(url(), attributes())
            .then((response) => {
                props.dispatch({
                    type: "SHOW_FLASH",
                    value: {
                        message: "Your password has been updated successfully"
                    }
                });
                resetFormAttributes();
            })
            .catch(error => handleFormErrors(error))
            .finally(() => setLoader(false))

    }

    function url() {
        return Config.remoteBaseUrl + `/me/password?token=${props.auth.token}`;
    }

    function attributes() {
        return {
            previous_password : previousPassword,
            password,
            password_confirmation: passwordConfirmation
        }
    }

    function handleFormErrors(error) {
        if(error.response.data) {
            const formErrors ={
                previous_password:null,
                password: null,
                password_confirmation: null
            };
            const { errors } = error.response.data;

            for(let key in errors) {
                formErrors[key] = errors[key][0];
            }
            
            setErrors(errors);
        }
    }

    function resetFormAttributes() {
        setPasswordConfirmation("");
        setPassword("");
        setPreviousPassword("");
    }

    function submitLabelText() {
        if(loader) {
            return "Saving...";
        }
        return "Update";
    }

    return (
        <div className="tab-pane fade mb-4" id="profile">
            <>
                <div className="form-group col-8">
                    <label className="col-form-label" htmlFor="name">Actual password</label>
                    <input type="password" className="form-control" value={previousPassword} id="name"
                           onChange={(event) => setPreviousPassword(event.target.value)}
                    />
                    { errors.previous_password !== null && <small className="text-danger">{ errors.previous_password }</small> }

                </div>
                <div className="form-group col-8">
                    <label className="col-form-label" htmlFor="password_confirmation">New password</label>
                    <input type="password" className="form-control" value={ password }
                           id="password"
                           onChange={ (event) => setPassword(event.target.value)}
                    />
                    { errors.password !== null && <small className="text-danger">{ errors.password }</small> }

                </div>
                <div className="form-group col-8">
                    <label className="col-form-label" htmlFor="password_confirmation">New password (Confirmation)</label>
                    <input type="password" className="form-control" value={passwordConfirmation} id="password_confirmation"
                           onChange={ (event) => setPasswordConfirmation(event.target.value) }
                    />
                    {
                        errors.password_confirmation !== null && <small className="text-danger">{ errors.password_confirmation }</small>
                    }
                </div>
                <div className="col-8">
                    <button className="btn btn-secondary" onClick={ handleFormSubmit }>{ submitLabelText() }</button>
                </div>
            </>
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Password);
