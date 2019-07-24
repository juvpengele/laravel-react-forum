import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Flash (props) {
    const { message, show } = props.flash;

    useEffect(() => {
        if(props.flash.show) {
            setTimeout(() => {
                props.dispatch({
                    type: "REMOVE_FLASH"
                })
            }, 3000)
        }
    });

    return (
        show &&
        <div className="alert alert-dismissible alert-success" style={{ position: 'fixed', bottom: '10px', right: '10px'}}>
            <strong>Well done!</strong> { message }.
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flash: state.flash
    }
};

export default connect(mapStateToProps)(Flash);