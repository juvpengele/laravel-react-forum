import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThreadsIndex from "../Pages/ThreadsIndex";
import ThreadShow from "../Pages/ThreadShow"

import Header from "../Pages/Layouts/Header";
import Footer from "../Pages/Layouts/Footer";
import NotFound from "../Pages/NotFound";
import CategoriesList from "../Components/Categories/CategoriesList";


const Routes = () => (
    <Router>
        <Header />

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <Route path="/" exact component={ ThreadsIndex } name="threads.index" />
                    <Route path="/:category/:thread" component={ ThreadShow } name="threads.show" exact/>
                    <Route path="/categories/:category/posts" component={ ThreadsIndex } />
                </div>
                <div className="col-md-4">
                    <CategoriesList/>
                </div>
            </div>
        </div>

        <Footer/>
    </Router>
);

export default Routes;