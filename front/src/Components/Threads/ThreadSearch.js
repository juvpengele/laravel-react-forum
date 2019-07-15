import React from 'react';
import ThreadInputSearch from "./ThreadSearch/ThreadInputSearch";
import ThreadSearchResults from "./ThreadSearch/ThreadSearchResults";
import { withRouter } from 'react-router-dom';
import config from '../../App/Config';
import axios from 'axios';

class ThreadSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            threads: [],
            showResult: false
        };
        console.log(this.props);
    }

    getSearchValue = ({ showResult, value}) => {
        if(showResult) {
            axios.get(`${config.remoteBaseUrl}/threads?search=${value}`)
                .then(({ data : threads}) => {
                    this.setState({
                        threads: threads.data,
                        showResult: true
                    })
                })
        } else {
            this.setState({
                showResult
            })
        }
    };

    redirect = (url) => {
        this.props.history.push(url);
    };


    render() {
        return (
            <div style={{ position: 'relative' }}>
                <ThreadInputSearch search={ this.getSearchValue } redirect={ this.redirect } />
                {
                    this.state.showResult && <ThreadSearchResults threads={this.state.threads} />
                }
            </div>
        )
    }
}

export default withRouter(ThreadSearch);
