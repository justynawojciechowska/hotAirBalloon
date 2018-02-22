import React from 'react';
import balloonImg from './../assets/images/balloon.png';
import cloud from './../assets/images/cloud.svg';
import fireBig from './../assets/images/fire-big.png';
import fireMedium from './../assets/images/fire-medium.png';
import fireSmall from './../assets/images/fire-small.png';

class Ballon extends React.Component {

    constructor() {
        super();

        this.state = {
            balloonAnimationClass: ''
        }
    }

    componentDidMount() {
        const balloon = this.refs.balloonImg,
            balloonWrapper = this.refs.balloonWrapper;

        balloon.addEventListener('animationend', () => {
            this.setState({balloonAnimationClass: 'animation-out'})
        }, false);

        balloonWrapper.addEventListener('animationend', (e) => {
            if (e.target == balloonWrapper) {
                document.body.classList.add('animation-ended')
            }
        }, false);
    }

    render() {
        return (
            <div className={`balloon ${this.state.balloonAnimationClass}`}>
                <div ref="balloonWrapper" className="balloon__wrapper">
                    <img ref="balloonImg" src={balloonImg} alt=""
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