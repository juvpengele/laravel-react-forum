import React from "react";

import PersonalInformation from '../../../Components/Profile/Settings/PersonalInformation';
import Breadcrumb from "../../../Components/Commons/Breadcrumb";

const Settings = (props) => {
    return (
        <div style={{ marginTop: "3.5rem"}}>
            <div>
                <Breadcrumb
                    title="My profile"
                    subtitle="Settings"
                />
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#information">Personal information.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile">Passwords.</a>
                </li>
            </ul>
            <div id="myTabContent" className="tab-content">
                <PersonalInformation/>
                <div className="tab-pane fade" id="profile">
                    <p>Passwords</p>
                </div>
            </div>
        </div>
    )
};

export default Settings;
