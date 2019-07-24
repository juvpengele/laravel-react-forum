import React from "react";

const Reply = ({ reply }) => (
    <div className="card  mb-3">
        <div className="card-body">
            <div>
                <h5>
                    { reply.creator.name }
                </h5>
            </div>
            <hr/>
            <p className="card-text">
                { reply.content }
            </p>
            <i className="fa fa-clock-o"/> <small className="text-muted text-right">{ reply.ago }</small>
        </div>
        {/*<div className="card-footer  d-flex justify-content-between">*/}
        {/*<div>*/}
        {/*<span className="mr-2">*/}
        {/*<i className="fa fa-comments"/> 0*/}
        {/*</span>*/}
        {/*<span>*/}
        {/*<i className="fa fa-eye"/> 0*/}
        {/*</span>*/}
        {/*</div>*/}
        {/*</div>*/}
    </div>
);

export default Reply;