import React from 'react';

function NewThreadButton({ onPressed }) {

    return (
        <button type="button" className="btn btn-info"
            style={{ position: 'fixed', bottom: '50px', right: '50px'}}
            onClick={() => onPressed(true)}
        >New thread <i className="fa fa-plus-circle" /></button>
    )
}

export default NewThreadButton;
