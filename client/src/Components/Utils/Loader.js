import React from "react";

import "../../assets/loader.css";

const Loader = ({ show }) => {
    return (
        show && <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="lds-roller mx-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default Loader;