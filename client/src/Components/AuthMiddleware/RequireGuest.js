import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const RequireGuest = (props) => {

    useEffect(() => {
        if(props.auth.loggedIn) {
            props.history.push('/');
        }
    });

    return <>{ props.children }</>
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(RequireGuest));
