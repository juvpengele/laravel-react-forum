import React from 'react';
import axios from 'axios';
import config from '../../Services/Config';



function LikeReplyButton(props) {

    const endpoint = `/api/replies/${ props.replyId }/likes?token=${props.auth}`;

    function likeReply() {

    }

    function getClassName() {
        let className = "btn ";
        if(props.isLiked) {
            return `${className} btn-success`;
        }
        return `${className} btn-secondary`;
    }

    return (
        <button className={ getClassName() } style={{ fontSize: '15px'}}>
            <i className="fa fa-thumbs-up" />
            { props.likesCount }
        </button>
    )
}

export default LikeReplyButton;
