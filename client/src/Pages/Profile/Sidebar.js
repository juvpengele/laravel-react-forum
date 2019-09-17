import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const Sidebar = (props) => {

    return (
        <ul className="list-group">

            <li className="list-group-item d-flex justify-content-between align-items-center text-primary"
            >
                Threads
                <span className="badge badge-info badge-pill">4</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center text-primary"
            >
                Best replies
                <span className="badge badge-info badge-pill">10</span>
            </li>

        </ul>
    )
};
export default Sidebar;
