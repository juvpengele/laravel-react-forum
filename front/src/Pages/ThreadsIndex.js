import React from "react";
import axios from "axios";
import Config from "../App/Config";

//Components
import ThreadDescription from "../Components/ThreadDescription";

class ThreadsIndex extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            threads: []
        }
    }

    componentWillMount() {
        document.title = "React Forum";

        let endpoint = `${Config.remote_base_url}/threads`;
        this._loadThreads(endpoint);
    }

    /**
     * Fetch all threads
     * @param endpoint
     * @private
     */
    _loadThreads = (endpoint) => {
        axios.get(endpoint)
        .then(({ data : threads}) => {
            this.setState({
                threads: threads.data
            })
        })
        .catch(error => console.log(error))
    };


    render() {
        return (
            <div className="row">
                <ThreadDescription threads={this.state.threads}/>
            </div>
        );
    }

}

export default ThreadsIndex;