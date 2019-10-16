import React from 'react';
import ThreadCard from '../../Components/Threads/ThreadCard';

class ThreadCollection extends React.Component {

    state = {
        threads: []
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.threads !== this.props.threads){
           this.setState({
               threads: this.props.threads
           })
       }
    }


    likeThread = (likedThread) => {
        const threads = this.state.threads.map((thread) => {
            if(thread.id === likedThread.id) {
                const actualLikesCount = parseInt(likedThread.likes_count);
                const likes_count = likedThread.is_liked ? actualLikesCount - 1 : actualLikesCount + 1;

                thread.is_liked = ! thread.is_liked;
                thread.likes_count = likes_count;
            }
            return thread
        });

        this.setState(threads);
    };

    render() {
        return (
            <>
                {
                    this.state.threads.map(thread => (
                        <ThreadCard
                            thread={thread} auth={this.props.auth} key={thread.id}
                            onLike={this.likeThread}
                        />
                        )
                    )
                }
            </>
        )
    }
}

export default ThreadCollection;
