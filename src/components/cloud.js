import PropTypes from 'prop-types'
import React from 'react';
import '../styles/scss/components/clouds.css';
import cloud from './../assets/images/cloud.svg';

class Cloud extends React.Component {

    static propTypes = {
        animationState: PropTypes.oneOf(['ANIMATION_START', 'ANIMATION_GO_TO', 'ANIMATION_END']),
        multiplier: PropTypes.number.isRequired
    };

    state = {
        translateX: 0,
        translateY: 0
    };

    componentWillReceiveProps(props) {
        this.setState({
            translateX: (props.facX * props.multiplier),
            translateY: (props.facY * props.multiplier)
        })
    }

    render() {
        const transX = (this.props.facX * this.props.multiplier) * 100,
            transY = (this.props.facY * this.props.multiplier) * 100;
        return (
            <img src={cloud} alt=""
                 style={{
                     transform: `translate(${transX}%,${transY}%)`
                 }}
                 className={`cloud-img cloud-img--${this.props.position}`}/>
        )
    }
}

export default Cloud;
