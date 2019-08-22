import React from 'react';
import axios from 'axios';
import Config from '../../Services/Config';

function BestReplyButton ({ active, auth, reply, thread, onPress, onRemove }) {

    function getActiveClass() {
        return active ? "btn-info": "btn-outline-secondary"
    }

    function _handleHttpRequest() {
        const endpoint = `${Config.remoteBaseUrl}/${thread.category.slug}/${thread.slug}/best-replies?token=${auth.token}`;
        const httpVerb = active ? 'delete': 'post';

        axios[httpVerb](endpoint, {reply_id: reply.id})
            .catch(error => console.log(error))
    }

    function saveAsBest() {
        _handleHttpRequest();

        if(active) {
            onRemove()
        } else {
            onPress()
        }
    }

    return (
        <button className={` ${getActiveClass()} btn mr-2`} onClick={saveAsBest}>
            <i className="fa fa-star-o"/>
        </button>
    )
}

export default BestReplyButton
