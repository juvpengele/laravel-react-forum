import React from "react";

import PersonalInformation from '../../../Components/Profile/Settings/PersonalInformation';
import Breadcrumb from "../../../Components/Commons/Breadcrumb";

import requireAuth from '../../../Hoc/requireAuth';
import { connect } from 'react-redux'
import Password from "../../../Components/Profile/Settings/Password";

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
                <Password/>
            </div>
        </div>
    )
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(
    requireAuth(Settings)
)

