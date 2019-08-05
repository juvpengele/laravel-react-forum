import React, { useState } from "react";
import config from '../../Services/Config';
import axios from 'axios';


const Reply = ({ reply, auth, onDelete, onEdit }) => {
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState('');

    const deleteReply = function (event) {
        event.preventDefault();
        onDelete(reply);

        const endpoint = `${config.remoteBaseUrl}/replies/${reply.id}?token=${auth.token}`;
        axios.delete(endpoint);
    };

    function saveEditingReply() {
        onEdit(content, reply);
        setEditing(false);

        const endpoint = `${config.remoteBaseUrl}/replies/${reply.id}?token=${auth.token}`;
        axios.put(endpoint, {content});
    }

    function handleEditingChange() {
        setEditing(true);
        setContent(reply.content);
    }

    function handleContentEditing(event) {
        setContent(event.target.value)
    }

    function showEditingButton() {
        if(editing) {
            return (
                <button className="mr-2 btn btn-warning text-white" style={{ cursor: 'pointer'}}
                    onClick={ () => setEditing(false) }
                >
                    <i className="fa fa-ban"/> Cancel
                </button>
            )
        }
        return (
            <button className="mr-2 btn btn-info text-white" style={{cursor: 'pointer'}} onClick={ handleEditingChange }>
                <i className="fa fa-pencil"/>
            </button>
        )
    }

    function showContent() {
        if(editing) {
            return (
                <>
                    <textarea className="form-control " rows="5" value={ content } onChange={handleContentEditing} />
                    <button className="mr-2 mt-2 btn btn-success text-white" style={{cursor: 'pointer'}} onClick={saveEditingReply}>
                        Edit <i className="fa fa-check"/>
                    </button>
                </>

            )
        }
        return (
            <>
                <p className="card-text">
                    {reply.content}
                </p>
                <i className="fa fa-clock-o"/>
                <small className="text-muted text-right">{reply.ago}</small>
            </>
        )
    }


    return (
        <div className="card  mb-3">
            <div className="card-body">
                <div>
                    <h5>
                        {reply.creator.name}
                    </h5>
                </div>
                <hr/>
                { showContent() }

            </div>
            {
                auth.id == reply.user_id &&
                <div className="card-footer  d-flex justify-content-between">
                    { showEditingButton() }
                    <button className="btn btn-danger" onClick={deleteReply} style={{ cursor: 'pointer'}} >
                        <i className="fa fa-trash-o"/>
                    </button>
                </div>
            }
        </div>
    )
};

export default Reply;