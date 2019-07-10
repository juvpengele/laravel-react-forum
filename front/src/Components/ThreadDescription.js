import React from 'react';

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
                    <small className="text-secondary">
                        <i className="fa fa-clock-o"/>
                        { thread.created_at }
                    </small>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{ thread.title }</h4>
                    <div>
                        <span className="mr-2">
                            <i className="fa fa-comments"/> 0
                        </span>
                        <span>
                            <i className="fa fa-eye"/> 0
                        </span>
                    </div>
                </div>
                <div className="card-footer">
                    <span className="badge badge-pill badge-info px-2 py-1 mr-2">Tags</span>
                    <span className="badge badge-pill badge-info px-2 py-1 mr-2">Tags</span>
                </div>
            </div>
        ))
    }
};


const ThreadDescription = ({ threads }) => {
    return (
        <div className="col-md-8">
            { _showThreads(threads) }
        </div>
    )
};

export default ThreadDescription;