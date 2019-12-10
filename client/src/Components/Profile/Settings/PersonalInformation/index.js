import React from 'react';

import Information from './Information';
import Avatar from './Avatar';

const PersonalInformation = (props) => {
    return (
        <div className="tab-pane fade show active" id="information">
            <div className="row my-4">
                <div className="col-md-2">
                    <Avatar />
                </div>
                <div className="col-md-7">
                    <Information />
                </div>
            </div>
        </div>
    )
};

export default PersonalInformation;
