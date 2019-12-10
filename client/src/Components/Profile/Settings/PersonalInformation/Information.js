import React from 'react';

const Information = (props) => {
    return (
        <>
            <div className="form-group">
                <label className="col-form-label" htmlFor="inputDefault">Name</label>
                <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
                </div>
                <div className="form-group">
                <label className="col-form-label" htmlFor="inputDefault">Email</label>
            <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
            </div>
            <button className="btn btn-secondary">Update</button>
        </>
    )
};

export default Information;
