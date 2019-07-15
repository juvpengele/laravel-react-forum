import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThreadsIndex from "../Pages/ThreadsIndex";
import ThreadShow from "../Pages/ThreadShow"

import Header from "../Pages/Layouts/Header";
import Footer from "../Pages/Layouts/Footer";
import NotFound from "../Pages/NotFound";


const Routes = () => (
    <Router>
        <Header />

        <div className="container mt-4">
            <Route path="/" exact component={ThreadsIndex} name="threads.index" />
            <Route path="/:category/:thread" component={ThreadShow} name="threads.show"/>
        </div>

        <Footer/>
    </Router>
);

export default Routes;