import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Information = (props) => {
    const [name, setName] = useState(props.auth.name);
    const [email, setEmail] = useState(props.auth.email);


    return (
        <>
            <div className="form-group">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} id="name" />
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="email">Email</label>
                <input type="email" className="form-control" value={email} id="email"

                />
            </div>
            <button className="btn btn-secondary">Update</button>
        </>
    )
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Information);
