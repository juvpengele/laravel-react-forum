import React, { useState} from 'react'
import axios from 'axios';
import config from '../../Services/Config';

function ReplyForm(props) {
    const [body, setBody] = useState('');

    function saveReply(event) {
        event.preventDefault();

        console.log(body);
    }

    return (
        <form method="POST" onSubmit={saveReply}>
            <textarea className="form-control mb-3" id="exampleTextarea" rows="3"
                onChange={(event) => setBody(event.target.value)}
                value={body}
            />
            <button className="btn btn-info mb-3" type="submit">Reply</button>
        </form>
    )
}

export default ReplyForm;