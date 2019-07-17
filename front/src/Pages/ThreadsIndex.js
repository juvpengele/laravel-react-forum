import React from "react";
import axios from "axios";
import Config from "../App/Config";

//Components
import ThreadDescription from "../Components/Threads/ThreadDescription";
import Paginator from "../Components/Paginator/Pagination";


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

    componentWillMount() {
        document.title = "Forum";

        let endpoint = this._getEndpoint(this.props.location);
        this._loadThreads(endpoint);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.location.pathname !== nextProps.location.pathname) {
            let endpoint = this._getEndpoint(nextProps.location);
            this._loadThreads(endpoint);
        }
    }

    /**
     * Return endpoint to load threads according to the location pathname
     * @param pathname
     * @returns {string}
     * @private
     */
    _getEndpoint({ pathname}) {
        let endpoint = Config.remoteBaseUrl;

        if(pathname) {
            if(pathname === '/') {
                return  `${endpoint}/threads`;
            }
            return endpoint + pathname
        }
        return  `${endpoint}/threads`;
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
        let endpoint = this.state.endpoint + `?page=${page}`;

        this._loadThreads(endpoint);

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    };


    render() {
        return (
            <div className="row">
                <ThreadDescription threads={this.state.threads.data}/>
                <div className="col-md-12">
                    <Paginator meta={this.state.threads.meta}  changePage={this.changePage} />
                </div>
            </div>
        );
    }

}

export default ThreadsIndex;