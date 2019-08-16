import React from 'react';
import axios from 'axios';
import config from '../../Services/Config';



function LikeReplyButton({reply, onLike, auth}) {

    function likeReply() {
        const endpoint = `${config.remoteBaseUrl}/replies/${ reply.id }/likes?token=${ auth.token}`;
        const verb = reply.is_liked ? 'delete' : 'post';

        onLike(reply);

        axios[verb](endpoint)
            .catch(error => console.log(error))
    }

    function getClassName() {
        let className = "btn ";
        if(reply.is_liked) {
            className = `${className} btn-success`;
        } else {
            className = `${className} btn-outline-success`;
        }

        if(! auth.loggedIn) {
            className += " disabled"
        }

        return className;
    }

    return (
        <button className={ getClassName() } style={{ fontSize: '15px'}}
            onClick={likeReply}
        >
            <i className="fa fa-thumbs-up" />
            { reply.likes_count }
        </button>
    )
}

export default LikeReplyButton;
