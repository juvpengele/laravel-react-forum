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
        this._editReply = this._editReply.bind(this);
        this.likeThread = this.likeThread.bind(this);
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
        const url =  this.props.auth.loggedIn ? `${endpoint}?token=${this.props.auth.token}` : endpoint;

        axios.get(url)
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

    _editReply(content, newReply) {
        const replies = this.state.replies.map(reply => {
            if(reply.id == newReply.id) {
                reply.content = content;
            }
            return reply;
        });

        this.setState({ replies });
    }

    likeThread(thread) {
        const actualLikesCount = parseInt(thread.likes_count);
        const likes_count = thread.is_liked ? actualLikesCount - 1 : actualLikesCount + 1;
        const is_liked = ! thread.is_liked;

        this.setState(prevState => {
            return {
                thread: {...prevState.thread, likes_count, is_liked }
            }
        })

    }

    render() {
        return (
            <>
                { this.state.loading && <Loader show={true}/>}
                <ThreadCard
                    thread={this.state.thread}
                    onLike={this.likeThread}
                    auth={this.props.auth}
                />

                { this.state.thread && <Replies replies={this.state.replies} auth={this.props.auth} onDelete={this._deleteReply}
                    onEdit={this._editReply}
                /> }

                {
                    this.props.auth.loggedIn &&
                    this.state.thread &&
                    <ReplyForm threadId={this.state.thread.id} addReply={this._addReply}/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({ auth : state.auth });

export default connect(mapStateToProps)(ThreadShow);