import React from "react";
import config from "../../Services/Config";
import axios from "axios";
import {Link} from "react-router-dom";


function getLikeClassName(thread) {
    if(thread.is_liked) {
        return " btn btn-primary"
    }
    return " btn btn-secondary";
}

function favoriteThread(thread, favoriteHandler, auth) {
    if(auth.loggedIn) {
        const httpVerb = thread.is_liked ? 'delete': 'post';
        const endpoint = `${config.remoteBaseUrl}/${thread.category.slug}/${thread.slug}/likes?token=${auth.token}`;

        axios[httpVerb](endpoint);

        favoriteHandler(thread);
    }
}


const ThreadCard = ({ thread, onLike, auth }) => {
    let element = '';
    if(thread) {
        element =  (
            <div className="">
                <div className="card border-light mb-4" key={thread.id}
                     style={{ boxShadow: "0 0.5rem 0.5rem rgba(168, 165, 165, 0.15)" }}
                >
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                            { thread.creator.name } said:
                        </div>
                        <div className="d-flex align-items-center">
                            <button className={ getLikeClassName(thread) } onClick={
                                () => favoriteThread(thread, onLike, auth) }
                            >
                                <i className="fa fa-heart" /> { thread.likes_count }
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link to={ `/${thread.category.slug}/${thread.slug }` }>
                            <h5 className="card-title" >
                                { thread.title }
                            </h5>
                        </Link>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                 <span className="mr-2">
                                    <i className="fa fa-comments"/> { thread.replies_count }
                                 </span>
                                 <span>
                                    <i className="fa fa-eye"/> { thread.visits_count }
                                 </span>
                            </div>
                            <div>
                                {
                                    thread.is_resolved &&
                                    <i className="fa fa-check text-success ml-2" style={{ fontSize: "25px", fontWeight: "bolder"}} />
                                }
                            </div>
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
            </div>
        )
    }
    return element;
};

export default ThreadCard;

