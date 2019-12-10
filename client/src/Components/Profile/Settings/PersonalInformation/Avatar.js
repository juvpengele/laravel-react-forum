import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Avatar = (props) => {

    useEffect(() =>  {
        console.log(props);
    }, []);



    return (
        <div>
            Avatar
        </div>
    )
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Avatar);
