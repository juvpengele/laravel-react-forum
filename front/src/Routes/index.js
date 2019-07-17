import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThreadsIndex from "../Pages/ThreadsIndex";
import ThreadShow from "../Pages/ThreadShow"

import Header from "../Pages/Layouts/Header";
import Footer from "../Pages/Layouts/Footer";
import NotFound from "../Pages/NotFound";
import CategoriesList from "../Components/Categories/CategoriesList";

import AuthLayoutRoutes from './AuthLayoutRoutes';
import ThreadLayoutRoutes from './ThreadLayoutRoutes';
import SignUp from "../Pages/Auth/Signup";

const Routes = () => (
    <Router>
        <Header />

        <div className="container mt-4">

            <ThreadLayoutRoutes path="/" exact component={ ThreadsIndex } name="threads.index" />
            <ThreadLayoutRoutes path="/:category/:thread" component={ ThreadShow } name="threads.show" exact/>
            <ThreadLayoutRoutes path="/categories/:category/posts" component={ ThreadsIndex } />

            <AuthLayoutRoutes path="/signup" component={ SignUp } exact />
        </div>

        <Footer/>
    </Router>
);

export default Routes;