import React from 'react';
import balloonImg from './../assets/images/balloon.png';
import cloud from './../assets/images/cloud.svg';
import fireBig from './../assets/images/fire-big.png';
import fireMedium from './../assets/images/fire-medium.png';
import fireSmall from './../assets/images/fire-small.png';
import Flame from './flame.js';
import Cloud from './cloud.js';
import '../styles/scss/components/balloon.css';

class Balloon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            balloonAnimationClass: '',
            cloudsPosition: ["left", "right", "behind"],
            flames: [
                {src: fireBig, size: 'big'},
                {src: fireMedium, size: 'medium'},
                {src: fireSmall, size: 'small'}
            ]
        }
    }

    closeContainerAnimation = (e) => {
        if (e.target === e.currentTarget) {
            document.body.classList.add('animation-ended')
        }
    };

    componentWillReceiveProps(props) {
        if (props.resetAnimation) {
            this.setState({balloonAnimationClass: '', moveClouds: {}});
            document.body.classList.remove('animation-ended');
        }
        if (props.startBalloonAnimation) {
            this.setState({balloonAnimationClass: 'animation-balloon-out', moveClouds: {}})
        }
    }

    render() {
        return (
            <div className={`balloon ${this.state.balloonAnimationClass}`}>
                <div className="balloon__wrapper" onAnimationEnd={this.closeContainerAnimation}>
                    <img src={balloonImg} alt=""
                         className="balloon__img balloon__img--balloon"/>

                    <div className="balloon__fire">
                        {
                            this.state.flames.map((flame) => {
                                return <Flame src={flame.src} size={flame.size}></Flame>
                            })
                        }

                    </div>
                </div>

                <div className="balloon__clouds">
                    {
                        this.state.cloudsPosition.map((position) => {
                            return <Cloud
                                src={cloud}
                                position={position}></Cloud>
                        })
                    }
                </div>

                <div className="balloon__bckg-img"></div>
                {/*separate div with background for proper animation*/}
            </div>
        )
    }
}

export default Balloon;
