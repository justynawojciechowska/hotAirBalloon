import React from 'react';
import balloonImg from './../assets/images/balloon.png';
import cloud from './../assets/images/cloud.svg';
import fireBig from './../assets/images/fire-big.png';
import fireMedium from './../assets/images/fire-medium.png';
import fireSmall from './../assets/images/fire-small.png';

class Ballon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            balloonAnimationClass: ''
        }
    }

    closeContainerAnimation = (e) => {
        if (e.target == e.currentTarget) {
            document.body.classList.add('animation-ended')
        }
    };

    balloonImgAnimation = (e) => {
        if(e.animationName == 'fadeFromTop'){
            this.setState({balloonAnimationClass: 'animation-out'})
        }
    };

    componentWillReceiveProps(props) {
        if (props.resetAnimation === true) {
            this.setState({balloonAnimationClass: ''});
            document.body.classList.remove('animation-ended');
        }
    }

    render() {
        return (
            <div className={`balloon ${this.state.balloonAnimationClass}`}>
                <div className="balloon__wrapper" onAnimationEnd={this.closeContainerAnimation}>
                    <img src={balloonImg} alt="" onAnimationEnd={this.balloonImgAnimation}
                         className="balloon__img balloon__img--balloon"/>

                    <div className="balloon__fire">
                        <img src={fireBig} alt="" className="balloon__fire-img balloon__fire-img--big"/>
                        <img src={fireMedium} alt="" className="balloon__fire-img balloon__fire-img--medium"/>
                        <img src={fireSmall} alt="" className="balloon__fire-img balloon__fire-img--small"/>
                    </div>
                </div>

                <img src={cloud} alt="" className="balloon__img balloon__img--cloud balloon__img--cloud-left"/>
                <img src={cloud} alt="" className="balloon__img balloon__img--cloud balloon__img--cloud-right"/>
                <img src={cloud} alt="" className="balloon__img balloon__img--cloud balloon__img--cloud-behind"/>
            </div>
        )
    }
}

export default Ballon;