import React from 'react';
import {Link } from 'react-router-dom';

import NamedRoutes from '../../Routes/NamedRoutes';

const Sidebar = (props) => {

    return (
        <>
            <div className="d-flex justify-content-end">
                <Link to={ NamedRoutes['users.settings']} className="btn btn-light mb-2">
                    Edit profile and settings. <i className="fa fa-pencil" />
                </Link>
            </div>

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
        </>
    )
};
export default Sidebar;
