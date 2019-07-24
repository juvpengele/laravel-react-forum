import React from "react";
import { Link } from "react-router-dom";
import ThreadSearch from "../../Components/Threads/ThreadSearch";
import { connect } from 'react-redux';

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
                    {
                        props.auth.loggedIn &&
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={(event) => logOut(event)}>Logout</a>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Header);