import React from "react";
import axios from "axios";
import Config from "../../Services/Config";
import { connect } from 'react-redux';
import requireAuth from '../../Hoc/requireAuth';


//Components
import Paginator from "../../Components/Paginator/Pagination";
import ThreadCard from '../../Components/Threads/ThreadCard';
import Loader from '../../Components/Utils/Loader';


class ThreadsIndex extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            threads: {
                data: [],
                meta: null
            },
            loader: true,
            endpoint: `${Config.remoteBaseUrl}/threads`
        };
    }

    componentDidMount() {
        document.title = "Forum";

        let endpoint =  `${Config.remoteBaseUrl}/threads?by=${this.props.auth.name}`;
        this._loadThreads(endpoint);
    }



    /**
     * Fetch all threads
     * @param endpoint
     * @private
     */
    _loadThreads = (endpoint) => {
        axios.get(endpoint)
            .then(({data: threads}) => {
                this.setState({
                    threads: {
                        data: threads.data,
                        meta: threads.meta
                    },
                    loader: false
                })
            })
            .catch(error => console.log(error))
    };


    /**
     * Pagination change page handler
     * @param page
     */
    changePage = (page) => {
        let token = this.props.auth.loggedIn ? `token=${this.props.auth.token}` : '';
        let endpoint = this.state.endpoint + `?page=${page}&${token}`;

        this._loadThreads(endpoint);

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    };

    likeThread = (likedThread) => {

        const newThreads = this.state.threads.data.map((thread) => {
            if(thread.id === likedThread.id) {
                const actualLikesCount = parseInt(likedThread.likes_count);
                const likes_count = likedThread.is_liked ? actualLikesCount - 1 : actualLikesCount + 1;

                thread.is_liked = ! thread.is_liked;
                thread.likes_count = likes_count;
            }
            return thread
        });

        this.setState(prevState => ({
            threads: {
                data: newThreads,
                meta: prevState.threads.meta
            }
        }))

    };


    render() {
        const { threads } = this.state;

        return (
            <div className="row">
                <div className="col-md-12">
                    { threads.data.length === 0 && <Loader show={true}/> }
                    {
                        threads.data.map(thread => (
                            <ThreadCard thread={thread}  onLike={this.likeThread}
                                auth={this.props.auth}  key={thread.id}
                            /> )
                        )
                    }
                </div>

                <div className="col-md-12">
                    <Paginator meta={threads.meta}  changePage={this.changePage} />
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(requireAuth(ThreadsIndex));
