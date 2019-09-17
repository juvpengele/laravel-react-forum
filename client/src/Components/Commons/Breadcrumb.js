import React from 'react';

const Breadcrumb = ({title, subtitle = null}) => {
    return (
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">{title}</a></li>
            {
                subtitle && <li className="breadcrumb-item active">{ subtitle }</li>
            }
        </ol>
    )
};

export default Breadcrumb;
