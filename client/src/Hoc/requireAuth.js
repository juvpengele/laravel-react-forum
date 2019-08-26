import React from 'react';

const requireAuth = (ComposedComponent) => {
    class RequireAuth extends React.Component {

        componentDidMount() {
            if(! this.props.auth.loggedIn) {
                this.props.history.push('/');
                this.props.dispatch({
                    type: "SHOW_FLASH",
                    value: { message: "You must be logged in" }
                });
            }
        }

        render() {
            return <ComposedComponent {...this.props}/>
        }
    }
    return RequireAuth;
};

export default requireAuth
