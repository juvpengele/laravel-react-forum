import React, { useState} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import config from '../../Services/Config';

function ReplyForm(props) {
    const [content, setContent] = useState('');

    function saveReply(event) {
        event.preventDefault();

        const endpoint = `${config.remoteBaseUrl}/replies?token=${props.auth.token}`;
        const attributes = {
            content,
            'thread_id' : props.threadId
        };
        axios.post(endpoint, attributes)
            .then(({data : reply}) => {
                props.addReply(reply.data);
                setContent('');
            })
            .catch(error => console.log(error));

    }

    return (
        <form method="POST" onSubmit={saveReply}>
            <textarea className="form-control mb-3" id="exampleTextarea" rows="3"
                onChange={(event) => setContent(event.target.value)}
                value={content}
            />
            <button className="btn btn-info mb-3" type="submit">Reply</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ReplyForm);