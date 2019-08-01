import React from "react";
import config from '../../Services/Config';
import axios from 'axios';


const Reply = ({ reply, auth, onDelete }) => {
    const deleteReply = function (event) {
        event.preventDefault();
        onDelete(reply);

        const endpoint = `${config.remoteBaseUrl}/replies/${reply.id}?token=${auth.token}`;
        axios.delete(endpoint);
    };

    return (
        <div className="card  mb-3">
            <div className="card-body">
                <div>
                    <h5>
                        {reply.creator.name}
                    </h5>
                </div>
                <hr/>
                <p className="card-text">
                    {reply.content}
                </p>
                <i className="fa fa-clock-o"/>
                <small className="text-muted text-right">{reply.ago}</small>
            </div>
            {
                auth.id == reply.user_id &&
                <div className="card-footer  d-flex justify-content-between">
                    <button className="mr-2 btn btn-primary text-white" style={{ cursor: 'pointer'}}>
                        <i className="fa fa-pencil"/>
                    </button>
                    <button className="btn btn-danger" onClick={deleteReply} style={{ cursor: 'pointer'}} >
                        <i className="fa fa-trash-o"/>
                    </button>
                </div>
            }

        </div>
    )
};

export default Reply;