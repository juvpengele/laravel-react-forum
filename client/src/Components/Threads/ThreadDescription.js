import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import axios from 'axios';
import config from '../../Services/Config';

import Loader from "../Utils/Loader";

function getLikeClassName(thread, auth) {
    if(thread.is_liked) {
        return " btn btn-primary"
    }
    return " btn btn-secondary";
}

function favoriteThread(thread, handler, auth) {
    if(auth.loggedIn) {
        const httpVerb = thread.is_liked ? 'delete': 'post';
        const endpoint = `${config.remoteBaseUrl}/${thread.category.slug}/${thread.slug}/likes?token=${auth.token}`;

        axios[httpVerb](endpoint);

        handler(thread);
    }
}

/**
 * Map over threads and render threads
 * @param threads
 * @param onLike
 * @param auth
 * @returns {*}
 * @private
 */
const _showThreads = function (threads, onLike, auth) {
    if(threads) {
        return threads.map(thread => (
            <div className="card border-light mb-4" key={thread.id}
                style={{ boxShadow: "0 0.5rem 0.5rem rgba(168, 165, 165, 0.15)" }}
            >
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        { thread.creator.name } said:
                    </div>
                    <button className={ getLikeClassName(thread, auth) } onClick={ () => favoriteThread(thread, onLike, auth) }>
                        <i className="fa fa-heart" /> { thread.likes_count }
                    </button>
                </div>
                <div className="card-body">
                    <Link to={ `/${thread.category.slug}/${thread.slug }` }>
                        <h5 className="card-title" >
                            { thread.title }
                        </h5>
                    </Link>
                    <div>
                        <span className="mr-2">
                            <i className="fa fa-comments"/> { thread.replies_count }
                        </span>
                        <span>
                            <i className="fa fa-eye"/> { thread.visits_count }
                        </span>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <Link className="btn btn-info rounded-pill"
                        to={`/categories/${thread.category.slug}/posts`}
                    >{ thread.category.name }</Link>

                    <small className="text-secondary">
                        <i className="fa fa-clock-o"/>
                        { thread.ago }
                    </small>
                </div>
            </div>
        ))
    }
};


const ThreadDescription = ({ threads, onLike, auth}) => {

    return (
        <div className="col-md-12">
            { threads.length === 0 && <Loader show={true}/> }

            { _showThreads(threads, onLike, auth) }
        </div>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ThreadDescription);