import React, {Fragment} from 'react';
import classnames from 'classnames';
import balloonImg from './../assets/images/balloon.png';
import fireBig from './../assets/images/fire-big.png';
import fireMedium from './../assets/images/fire-medium.png';
import fireSmall from './../assets/images/fire-small.png';
import Flame from './flame.js';
import Cloud from './cloud.js';
import CloudsContainer from './clouds-container';
import '../styles/scss/components/balloon.css';
import PropTypes from "prop-types";

class Balloon extends React.Component {

    static propTypes = {
        animationState: PropTypes.oneOf(['ANIMATION_START', 'ANIMATION_GO_TO', 'ANIMATION_RESET']),
    };

    closeContainerAnimation = (e) => {
        if (this.props.animationState === 'ANIMATION_GO_TO') {
            if (e.target === e.currentTarget) {
                this.props.setAnimationState('ANIMATION_RESET');

                setTimeout(()=> {
                    this.props.setAnimationState('ANIMATION_START');
                }, 6000)
            }
        }
    };

    render() {
        return (
            <div className={classnames('balloon', {
                'balloon--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                'balloon--animation-in': this.props.animationState === 'ANIMATION_START',
                'balloon--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
            })}>

                <div className={classnames('balloon__wrapper', {
                    'balloon__wrapper--animation-out': this.props.animationState === 'ANIMATION_GO_TO'
                })} onAnimationEnd={this.closeContainerAnimation}>

                    <div className={classnames('balloon__wrapper-pulse', {
                        'balloon__wrapper-pulse--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                    })}>

                        <img src={balloonImg} alt=""
                             className={classnames('balloon__img balloon__img--balloon', {
                                 'balloon__img--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                                 'balloon__img--animation-in': this.props.animationState === 'ANIMATION_START',
                                 'balloon__img--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                             })}/>

                        <div className="balloon__fire">
                            <Flame src={fireBig} size='big' animationState={this.props.animationState}/>
                            <Flame src={fireMedium} size='medium' animationState={this.props.animationState}/>
                            <Flame src={fireSmall} size='small' animationState={this.props.animationState}/>
                        </div>
                    </div>
                </div>

                <div className={classnames('balloon__clouds', {
                    'balloon__clouds--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                    'balloon__clouds--animation-in': this.props.animationState === 'ANIMATION_START',
                    'balloon__clouds--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                })}>
                    <CloudsContainer
                        containerSelector='.main-content'
                        animationState={this.props.animationState}
                        render={(props) => (
                            <Fragment>
                                <Cloud position='right' multiplier='4.5'
                                       positionCoordinates={{right: '-40%', bottom: '-25%'}}  {...props}/>
                                <Cloud position='left' multiplier='3'
                                       positionCoordinates={{left: '-25%', bottom: '0'}} {...props}/>
                                <Cloud position='behind' multiplier='1.5'
                                       positionCoordinates={{right: '6%', bottom: '30%'}}  {...props}/>
                            </Fragment>
                        )}/>
                </div>

                <div className="balloon__bckg-img"></div>
                {/*separate div with background for proper animation*/}
            </div>
        )
    }
}

export default Balloon;
