import React from "react";
import Reply from "./Reply";

const Replies = ({ replies, auth, onDelete }) => {


    const _showReplies = () => {
        return replies.map(reply => <Reply reply={reply} key={reply.id} auth={auth}
            onDelete={onDelete}
        /> );
    };

    return (
        <div>
            { _showReplies() }
        </div>
    )
};

export default Replies;