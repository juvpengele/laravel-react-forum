import React from "react";
import Reply from "./Reply";
import axios from 'axios';
import config from "../../Services/Config";
import ReplyForm from "./ReplyForm";

class Replies extends React.Component {
    constructor(props)  {
        super(props);

        this.state = {
            replies: []
        };

        this.addReply = this.addReply.bind(this);
        this.editReply = this.editReply.bind(this);
        this.deleteReply = this.deleteReply.bind(this);
        this.likeReply = this.likeReply.bind(this);
        this.setBestReply = this.setBestReply.bind(this);
        this.removeAsBestReply = this.removeAsBestReply.bind(this);
    }

    componentDidMount() {
        const {category, slug} = this.props.thread;
        const { auth } = this.props;

        const endpoint = auth.loggedIn?
            `${config.remoteBaseUrl}/${category.slug}/${slug}/replies?token=${ auth.token}` :
            `${config.remoteBaseUrl}/${category.slug}/${slug}/replies`;


        axios.get(endpoint)
            .then(({ data : replies }) => {
                this.setState({ replies: replies.data })
            })
            .catch(error => console.log(error.response));
    }

    addReply(reply) {
        this.setState((prevState) => {
            return {
                replies: [...prevState.replies, reply],
            }
        }, () => this.props.onNewReply)
    }

    editReply(content, newReply) {
        const replies = this.state.replies.map(reply => {
            if(parseInt(reply.id) === parseInt(newReply.id)) {
                reply.content = content;
            }
            return reply;
        });

        this.setState({ replies });
    }

    deleteReply(removedReply) {
        const replies = this.state.replies.filter(reply => reply.id !== removedReply.id);
        this.setState((prevState) => {
            return {
                replies
            }
        }, () => this.props.onRemovedReply);
    }

    likeReply(likedReply) {
        const replies = likedReply.is_liked ? this._unlike(likedReply) : this._like(likedReply);

        this.setState({ replies });
    }

    _like({ id }) {
        return this.state.replies.map((reply) => {
            if(parseInt(id) === parseInt(reply.id)) {
                reply.likes_count++;
                reply.is_liked = true;
            }
            return reply;
        });

    }


    _unlike({ id }) {
        return this.state.replies.map((reply) => {
            if(parseInt(id) === parseInt(reply.id)) {
                reply.likes_count--;
                reply.is_liked = false;
            }
            return reply;
        });
    };


    setBestReply(reply) {
        this.props.onMarkBestReply(reply);
    }

    removeAsBestReply() {
        this.props.onRemoveAsBestReply()
    }

    render() {
        return (
            <div>
                {
                    this.state.replies.map(reply =>
                        <Reply
                            key={reply.id}
                            reply={reply}
                            thread={this.props.thread}
                            auth={ this.props.auth }
                            onEdit={ this.editReply }
                            onDelete={ this.deleteReply }
                            onLike={this.likeReply}
                            onMark={this.setBestReply}
                            onRemoveAsBest={this.removeAsBestReply}
                        />
                    )
                }
                <div>
                    <ReplyForm threadId={this.props.thread.id} addReply={this.addReply}/>
                </div>
            </div>
        )
    }
}



export default Replies;
