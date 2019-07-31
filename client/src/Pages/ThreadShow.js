import React from "react";
import config from "../Services/Config";
import axios from "axios";
import { connect } from 'react-redux';

//Components
import ThreadCard from "../Components/Threads/ThreadCard";
import Loader from "../Components/Utils/Loader";
import Replies from "../Components/Replies/Replies";
import ReplyForm from '../Components/Replies/ReplyForm'

class ThreadShow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            thread: null,
            replies: [],
            loading: true,
        };

        this._addReply = this._addReply.bind(this);
        this._deleteReply = this._deleteReply.bind(this);
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
                    replies: thread.data.replies,
                    loading: false
                });
                document.title = `${this.state.thread.title} | Forum`
            })
            .catch(error => console.log(error));
    }

    _addReply(reply) {
        this.setState((prevState) => {
            return {
                replies: [...prevState.replies, reply],
                thread: {...prevState.thread, replies_count: prevState.thread.replies_count + 1 }
            }
        })
    }

    _deleteReply(removedReply) {
        const replies = this.state.replies.filter(reply => reply.id !== removedReply.id);
        this.setState((prevState) => {
            return {
                replies,
                thread: {...prevState.thread, replies_count: prevState.thread.replies_count - 1 }
            }
        });
    }

    render() {
        return (

            <div className="col-md-12">
                { this.state.loading && <Loader show={true}/>}
                <ThreadCard thread={this.state.thread} />

                { this.state.thread && <Replies replies={this.state.replies} auth={this.props.auth} onDelete={this._deleteReply}/> }

                {
                    this.props.auth.loggedIn &&
                    this.state.thread &&
                    <ReplyForm threadId={this.state.thread.id} addReply={this._addReply}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ auth : state.auth });

export default connect(mapStateToProps)(ThreadShow);