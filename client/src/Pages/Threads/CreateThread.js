import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewThreadButton from '../../Components/Threads/NewThread/NewThreadButton';
import NewThreadModal from '../../Components/Threads/NewThread/NewThreadModal';

const CreateThread = (props) => {
    const [showModal, setShowModal] = useState(false);

    function redirectToThread(thread) {
        setShowModal(false);

        const redirectionUrl = `/${thread.category.slug}/${thread.slug}`;
        props.history.push(redirectionUrl);

        props.dispatch({type: "SHOW_FLASH", value: { message: "Your thread has been created successfully ! "}});
    }

    return (
        <>
            <NewThreadButton onPressed={() => setShowModal(true)  } />
            <NewThreadModal auth={props.auth} show={showModal}
                onClosed={() => setShowModal(false) } onSaved={ redirectToThread }
            />
        </>
    )
};

const mapStateToProps = (state) => ({ auth : state.auth, flash: state.flash });

export default connect(mapStateToProps)(
    withRouter(CreateThread)
);
