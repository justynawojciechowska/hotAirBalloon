import React from 'react';
import '../styles/scss/components/flame.css';
import classnames from "classnames";
import PropTypes from "prop-types";

const Flame = (props) => {
    return (
        <img src={props.src} alt=""
             className={classnames(`flame-img flame-img--${props.size}`, {
                 'flame-img--animation-out': props.animationState === 'ANIMATION_GO_TO',
             })}
        />
    );
};

Flame.propTypes = {
    animationState: PropTypes.oneOf(['ANIMATION_START', 'ANIMATION_GO_TO', 'ANIMATION_RESET']),
};

export default Flame;
