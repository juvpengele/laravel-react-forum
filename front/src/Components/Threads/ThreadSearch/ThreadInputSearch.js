import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const ThreadInputSearch = (props, context) => {

    const [query, setQuery] = useState('');

    function evaluateTerm(event) {
        const { value } = event.target;

        setQuery(value);

        if(value.length > 3) {
            props.search({
                showResult: true,
                value
            })
        } else {
            props.search({
                showResult: false,
                value: ''
            })
        }
    }

    const clearInput = (event) => {
        const { value } = event.target;

        setQuery(value);

        let threadLink = event.relatedTarget;
        if(threadLink !== null && threadLink.classList.contains('search-result')) {

            props.redirect(threadLink.dataset.url);

            removeResults();

        } else {
            props.search({
                showResult: false,
                value
            });
        }
    };

    const removeResults = () => {
        setQuery('');

        props.search({
            showResult: false,
            value:''
        })
    };


    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={ (event) =>  evaluateTerm(event) }
                value={ query } onBlur={(event) => clearInput(event)} onFocus={(event) =>  evaluateTerm(event) }
            />
        </form>
    );

};

export default ThreadInputSearch;