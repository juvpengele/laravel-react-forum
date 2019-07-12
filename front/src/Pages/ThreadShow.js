import React from "react";
import config from "../App/Config";
import axios from "axios";

//Components
import ThreadCard from "../Components/ThreadCard";

class ThreadShow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            thread: null
        }

    }

    componentDidMount() {
        const { category, thread } = this.props.match.params;

        let endpoint =  `${config.remoteBaseUrl}/${category}/${thread}`;
        this._loadThread(endpoint);
    }

    _loadThread(endpoint) {
        axios.get(endpoint)
            .then(({data: thread}) => {
                this.setState({ thread: thread.data })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <ThreadCard thread={this.state.thread} />
                </div>

            </div>
        )
    }
}

export default ThreadShow;