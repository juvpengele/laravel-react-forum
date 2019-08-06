import React from 'react';
import { Link } from "react-router-dom";

import Loader from "../Utils/Loader";
/**
 * Map over threads and render threads
 * @param threads
 * @returns {*}
 * @private
 */
const _showThreads = function (threads) {
    if(threads) {
        return threads.map(thread => (
            <div className="card border-light mb-4" key={thread.id}
                style={{ boxShadow: "0 0.5rem 0.5rem rgba(168, 165, 165, 0.15)" }}
            >
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        { thread.creator.name } said:
                    </div>
                    <button className="btn">
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


const ThreadDescription = ({ threads }) => {
    return (
        <div className="col-md-12">
            { threads.length === 0 && <Loader show={true}/> }

            { _showThreads(threads) }
        </div>
    )
};

export default ThreadDescription;