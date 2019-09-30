import React from "react";
import config from "../../Services/Config";
import axios from "axios";
import { connect } from 'react-redux';

//Components
import ThreadCard from "../../Components/Threads/ThreadCard";
import Loader from "../../Components/Utils/Loader";
import Replies from "../../Components/Replies/Replies";

class ThreadShow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            thread: null,
            loading: true,
        };

        this.likeThread = this.likeThread.bind(this);
        this.addRepliesCount = this.addRepliesCount.bind(this);
        this.removeRepliesCount = this.removeRepliesCount.bind(this);
        this.markAsBestReply = this.markAsBestReply.bind(this);
        this.removeAsBestReply = this.removeAsBestReply.bind(this);
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
            .then(({ data : thread}) => {
                const { data } = thread;

                this.setState({ thread: data, loading: false },
                    () => document.title = this.state.thread.title + " | Forum")
            })
            .catch(error => console.log(error.response));

    }

    addRepliesCount() {
        this.setState(prevState => {
            return  {
                thread: {...prevState.thread, replies_count: prevState.replies_count++}
            }
        })
    }

    removeRepliesCount() {
        this.setState(prevState => {
            return  {
                thread: {...prevState.thread, replies_count: prevState.replies_count--}
            }
        })
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

    markAsBestReply(reply) {
        this.setState((prevState) => {
            return {
                thread: {...prevState.thread, best_reply_id: reply.id, is_resolved: true}
            }
        })
    }

    removeAsBestReply() {
        this.setState(prevState => ({
            thread: {...prevState.thread, best_reply_id: null, is_resolved: false}
        }))
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

                {
                    this.state.thread &&
                    <Replies
                        auth={this.props.auth}
                        thread={this.state.thread}
                        onNewReply={this.addRepliesCount}
                        onRemovedReply={this.removeRepliesCount}
                        onMarkBestReply={this.markAsBestReply}
                        onRemoveAsBestReply={this.removeAsBestReply}
                    />
                }

            </>
        )
    }
}

const mapStateToProps = (state) => ({ auth : state.auth });

export default connect(mapStateToProps)(ThreadShow);
