import React from 'react';
import { Link } from 'react-router-dom'

const ThreadSearchResults = ({ threads }) => {

    const showThreads = (results) => {
        if(results) {
            return results.map(thread => (
                <a href="#" className="list-group-item list-group-item-action search-result"
                      key={thread.id} data-url={`/${thread.category.slug}/${thread.slug}`}
                >
                    { thread.title }
                </a>
            ))
        }
    };

    return (
        <div style={{ position: 'absolute', width: '100%'}}>
            <div className="list-group mt-1">
                { showThreads(threads)}
            </div>
        </div>
    )
};

export default ThreadSearchResults;