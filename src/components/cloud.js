import React from 'react';
import '../styles/scss/components/clouds.css';

const Cloud = (props) => {
    return (
        <img src={props.src} alt="" style={props.moveClouds}
             className={`cloud-img cloud-img--${props.position}`}/>
    );
};

export default Cloud;
