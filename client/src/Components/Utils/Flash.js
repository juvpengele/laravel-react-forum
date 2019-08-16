import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './Animate.css';

function Flash (props) {
    const {animationClassName, setAnimationClassName} = useState('slideInRight');
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
        <div className={`alert alert-dismissible alert-success animated ${animationClassName}` } style={{ position: 'fixed', bottom: '10px', right: '10px'}}>
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