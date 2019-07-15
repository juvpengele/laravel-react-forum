import React from "react";
import config from "../App/Config";
import axios from "axios";

//Components
import ThreadCard from "../Components/Threads/ThreadCard";
import Loader from "../Components/Utils/Loader";
import Replies from "../Components/Replies/Replies";

class ThreadShow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            thread: null,
            loading: true,
        }
    }

    componentDidMount() {
        const { category, thread } = this.props.match.params;

        let endpoint =  `${config.remoteBaseUrl}/${category}/${thread}`;
        this._loadThread(endpoint);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { pathname } = nextProps.location;

        if(pathname) {
            this.setState({
                loader: true
            });
            this._loadThread(config.remoteBaseUrl + pathname);
        }
    }

    _loadThread(endpoint) {
        axios.get(endpoint)
            .then(({data: thread}) => {
                this.setState({
                    thread: thread.data,
                    loading: false
                });

                document.title = `${this.state.thread.title} | Forum`
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    { this.state.loading && <Loader show={true}/>}
                    <ThreadCard thread={this.state.thread} />


                    { this.state.thread && <Replies replies={this.state.thread.replies}/> }
                </div>
            </div>
        )
    }
}

export default ThreadShow;