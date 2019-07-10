import React from "react";

class ThreadsIndex extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            threads: []
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card border-light mb-3 " >
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <div>
                                John Doe said:
                            </div>
                            <span>
                                <i className="fa fa-clock-o"></i>
                                20 minutes ago.
                            </span>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Light card title</h4>
                            <div>
                                <span className="mr-2">
                                    <i className="fa fa-comments"/> 20
                                </span>
                                <span>
                                    <i className="fa fa-eye"/> 20
                                </span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <span className="badge badge-pill badge-primary px-2 py-1 mr-2">Tags</span>
                            <span className="badge badge-pill badge-primary px-2 py-1 mr-2">Tags</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThreadsIndex;