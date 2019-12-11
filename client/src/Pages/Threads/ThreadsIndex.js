import React from "react";
import axios from "axios";
import Config from "../../Services/Config";
import { connect } from 'react-redux';

//Components
import Paginator from "../../Components/Paginator/Pagination";
import Loader from '../../Components/Utils/Loader';
import ThreadCollection from "../../Components/Threads/ThreadCollection";


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
    _getEndpoint({ pathname }) {

        const endpoint = Config.remoteBaseUrl;
        const token = this.props.auth.loggedIn ? `token=${this.props.auth.token}` : '';

        if(pathname) {
            if(pathname === '/') {
                return  `${endpoint}/threads?${token}`;
            }
            return endpoint + pathname + `?${token}`
        }
        return  `${endpoint}/threads?${token}`;
    }

    /**
     * Fetch all threads
     * @param endpoint
     * @private
     */
    _loadThreads = (endpoint) => {

        axios.get(endpoint)
        .then(({ data: threads }) => {
            this.setState({
                threads: {
                    data: threads.data,
                    meta: threads.meta
                }
            })
        })
        .catch(error => console.log(error))
        .finally(() => {
            this.setState({
                loader: false
            });
        })
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



    render() {
        const { threads } = this.state;

        return (
            <div className="row">
                <div className="col-md-12">
                    <Loader show={this.state.loader}/>
                    <ThreadCollection
                        auth={this.props.auth}
                        threads={this.state.threads.data}
                    />
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

export default connect(mapStateToProps)(ThreadsIndex);
