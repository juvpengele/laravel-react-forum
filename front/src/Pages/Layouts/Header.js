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
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <ThreadSearch/>
            </div>
        </nav>
    )
};

export default Header;