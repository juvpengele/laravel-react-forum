import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ThreadsIndex from "../Pages/Threads/ThreadsIndex";
import ThreadShow from "../Pages/Threads/ThreadShow"

import Header from "../Pages/Layouts/Header";
import Footer from "../Pages/Layouts/Footer";

import AuthLayoutRoutes from './AuthLayoutRoutes';
import ThreadLayoutRoutes from './ThreadLayoutRoutes';
import SignUp from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import Flash from "../Components/Utils/Flash";
import MyThreads from '../Pages/Profile/Threads';
import CreateThread from "../Pages/Threads/CreateThread";
import RequireGuest from "../Components/AuthMiddleware/RequireGuest";
import Settings from "../Pages/Profile/Settings";

import NamedRoutes from './NamedRoutes';

const Routes = () => (
    <Router>
        <Header />

        <div className="container mt-4">
            <Switch>
                <ThreadLayoutRoutes path="/" exact component={ ThreadsIndex } name="threads.index" />

                <AuthLayoutRoutes path="/signup" component={ SignUp } middleware={ RequireGuest } exact />
                <AuthLayoutRoutes path="/login" component={ Login } exact middleware={ RequireGuest } />

                <AuthLayoutRoutes path={ NamedRoutes['users.profile'] } component={ MyThreads } exact />
                <AuthLayoutRoutes path={ NamedRoutes['users.settings'] } component={ Settings } exact />

                <ThreadLayoutRoutes path="/:category/:thread" component={ ThreadShow } name="threads.show" exact />
                <ThreadLayoutRoutes path="/categories/:category/posts" component={ ThreadsIndex } exact />
            </Switch>
        </div>

        <CreateThread />

        <Footer/>

        <Flash/>
    </Router>
);

export default Routes;
