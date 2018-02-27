import PropTypes from 'prop-types'
import React from 'react';
import '../styles/scss/components/clouds.css';
import cloud from './../assets/images/cloud.svg';

class Cloud extends React.Component {

    static propTypes = {
        animationState: PropTypes.oneOf(['ANIMATION_START', 'ANIMATION_GO_TO', 'ANIMATION_END'])
    };

    state = {
        translateX: 0,
        translateY: 0,
        fadeFromTopDelay: '',
        fadeFromTopDuration: '',
        cloudAnimationClass: ''
    };

    componentWillReceiveProps(props) {
        this.setState({
            translateX: (props.facX * props.multiplier),
            translateY: (props.facY * props.multiplier)
        })
    }

    render() {
        return (
            <img src={cloud} alt=""
                 style={{
                     ...this.props.positionCoordinates,
                     transform: `translate(${(this.state.translateX)}px,${(this.state.translateY)}px)`
                 }}
                 className={`cloud-img cloud-img--${this.props.position}`}/>
        )
    }
}

export default Cloud;
