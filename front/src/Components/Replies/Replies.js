import React from "react";
import Reply from "./Reply";

const Replies = ({ replies }) => {

    const _showReplies = () => {
        return replies.map(reply => <Reply reply={reply} key={reply.id}/> );
    };

    return (
        <div>
            { _showReplies() }
        </div>
    )
};

export default Replies;