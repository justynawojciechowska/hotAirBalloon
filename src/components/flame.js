import React from 'react';
import '../styles/scss/components/flame.css';

const Flame = (props) => {
    return (
        <img src={props.src} alt="" className={`flame-img flame-img--${props.size}`}/>
    );
};
export default Flame;
