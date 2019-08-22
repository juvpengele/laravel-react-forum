import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '../../Services/Config';
import axios from 'axios';






const CategoriesList = (props) => {

    const useFetch = (url) => {
        const [categories, setCategories] = useState([]);

        // empty array as second argument equivalent to componentDidMount
        useEffect(() => {
            axios.get(url)
                .then(({ data : categoryCollection}) => {
                    setCategories( categoryCollection.data );
                    props.dispatch({type: "ADD_CATEGORIES", value: categoryCollection.data});
                });

        }, []);

        return categories;
    };



    const endpoint  = `${config.remoteBaseUrl}/categories`;
    const categories = useFetch(endpoint);

    return (
        <ul className="list-group">
            {
                categories.map(category => (
                    <Link className="list-group-item d-flex justify-content-between align-items-center text-primary" key={category.id}
                        to={`/categories/${category.slug}/posts`}
                    >
                        { category.name }
                        <span className="badge badge-primary badge-pill">{ category.threads_count }</span>
                    </Link>
                ))
            }
        </ul>
    )
};

const mapStateToProps = (state) => ({ categories: state.categories });

export default connect(mapStateToProps)(CategoriesList);
