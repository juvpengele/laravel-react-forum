import React from "react";
import { Link } from "react-router-dom";
import ThreadSearch from "../../Components/Threads/ThreadSearch";


const Header = (props) => {
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
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link btn btn-info btn-signup" href="#"

                        >Signup</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;