import React from "react";

const ThreadCard = ({ thread }) => {

    let element = "";

    if(thread) {
        element =   (
            <div className="card border-light mb-4" key={thread.id}
                 style={{ boxShadow: "0 0.5rem 0.5rem rgba(168, 165, 165, 0.15)" }}
            >
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        { thread.creator.name } said:
                    </div>
                    <small className="text-secondary">
                        <i className="fa fa-clock-o"/>
                        { thread.ago }
                    </small>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary" >
                        { thread.title }
                    </h5>
                    <p>
                        { thread.content }
                    </p>
                </div>
                <div className="card-footer bg-light d-flex justify-content-between">
                    <a className="btn btn-info rounded-pill" href="#">{ thread.category.name }</a>
                    <div>
                        <span className="mr-2">
                            <i className="fa fa-comments"/> { thread.replies_count }
                        </span>
                        <span>
                            <i className="fa fa-eye"/> { thread.visits_count }
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return element;
};

export default ThreadCard;

