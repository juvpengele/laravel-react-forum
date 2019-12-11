import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Config from '../../../../Services/Config';
import axios from 'axios';

const Information = (props) => {
    const [name, setName] = useState(props.auth.name);
    const [email, setEmail] = useState(props.auth.email);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: null,
        email: null
    });

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleFormSubmit() {
        setLoading(true);

        const errors = {
            name: null,
            email: null
        };

        refreshErrors(errors);

        axios.put(url(), { name, email})
            .then(({ data : auth }) => {
                saveChanges(auth.data)
            })
            .catch((error) => handleFormErrors(error, errors))
            .finally(() => setLoading(false));
    }

    function url() {
        return Config.remoteBaseUrl+ `/me/personal-information?token=${ props.auth.token }`;
    }

    function saveChanges(data) {
        props.dispatch({
            type: "SAVE_PERSONAL_INFORMATION",
            value: data
        })
    }

    function submitLabelText() {
        return loading ? "Saving...": "Update";
    }

    function refreshErrors(errors) {
        setErrors(errors);
    }

    function handleFormErrors (error, errors) {
        if(error.response.data.errors) {
            const { errors : formErrors } = error.response.data;

            for(let key in error.response.data.errors) {
                errors[key] = formErrors[key][0];
            }

            setErrors(errors);
        }
    }

    return (
        <>
            <div className="form-group">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} id="name"
                    onChange={ handleNameChange }
                />
                {
                    errors.name !== null && <small className="text-danger">{ errors.name }</small>
                }

            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="email">Email</label>
                <input type="email" className="form-control" value={email} id="email"
                       onChange={ handleEmailChange }
                />
                {
                    errors.email !== null && <small className="text-danger">{ errors.email }</small>
                }
            </div>
            <button className="btn btn-secondary" onClick={ handleFormSubmit }>{ submitLabelText() }</button>
        </>
    )
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Information);
