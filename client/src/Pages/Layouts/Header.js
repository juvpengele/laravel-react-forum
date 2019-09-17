import React from "react";
import { Link } from "react-router-dom";
import ThreadSearch from "../../Components/Threads/ThreadSearch";
import { connect } from 'react-redux';
import NamedRoutes from '../../Routes/NamedRoutes';

const Header = (props) => {

    function logOut(event) {
        event.preventDefault();

        props.dispatch({
            type: "LOGOUT",
            value: null
        });

        props.dispatch({
            type: "SHOW_FLASH",
            value: {
                message: "You are logged out successfully"
            }
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top ">
            <Link className="navbar-brand" to="/">Forum</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>

                <ThreadSearch/>

                <ul className="navbar-nav">
                    {
                        ! props.auth.loggedIn &&
                        <>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link btn btn-info btn-signup" href="#"
                                >Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" >Login</Link>
                            </li>
                        </>
                    }
                </ul>

                {
                    props.auth.loggedIn &&
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            { props.auth.name } <i className="fa fa-user text-white" style={{ fontSize: "18px" }} />
                        </button>

                        <div className="dropdown-menu dropdown-menu-right" >
                            <Link to={ NamedRoutes['users.profile'] } className="dropdown-item">Profile</Link>
                            <button className="dropdown-item" type="button" onClick={logOut}>Logout</button>
                        </div>
                    </div>
                }

            </div>
        </nav>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Header);
