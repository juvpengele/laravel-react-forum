import React from 'react'
import CategoriesList from '../Components/Categories/CategoriesList';

const DefaultLayout = (props) => {
    return (
        <div className="row">
            <div className="col-md-8">
                { props.children }
            </div>
            <div className="col-md-4">
                <CategoriesList/>
            </div>
        </div>
    )
};

export default DefaultLayout;