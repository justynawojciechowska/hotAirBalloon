import React from 'react' ;
import PropTypes from 'prop-types';
import Balloon from './balloon';
import Content from './content';
import Menu from './menu';
import logo from './../assets/images/logo.svg'
import classnames from "classnames";

function MainContent(props) {

    return (
        <div className={classnames('main-content', {
            'main-content--animation-in': props.animationState === 'ANIMATION_START',
            'main-content--animation-out': props.animationState === 'ANIMATION_GO_TO',
            'main-content--animation-reset': props.animationState === 'ANIMATION_RESET',
        })}>

            <Menu containerClassName="main-content__nav" {...props} />

            <div className={classnames('main-content__article', {
                'main-content__article--animation-in': props.animationState === 'ANIMATION_START',
                'main-content__article--animation-out': props.animationState === 'ANIMATION_GO_TO',
                'main-content__article--animation-reset': props.animationState === 'ANIMATION_RESET',
            })}>

                <div className="main-content__img">
                    <img src={logo} alt=""
                         className={classnames('logo', {
                             'logo--animation-in': props.animationState === 'ANIMATION_START',
                             'logo--animation-out': props.animationState === 'ANIMATION_GO_TO',
                             'logo--animation-reset': props.animationState === 'ANIMATION_RESET',
                         })}
                    />
                </div>
                <Content disabledReadArticleBtn={props.animationState === 'ANIMATION_GO_TO' || props.animationState === 'ANIMATION_RESET'} {...props}/>
            </div>

            <div className="main-content__aside">
                <Balloon {...props} />
            </div>
        </div>
    )
}

MainContent.propTypes = {
    animationState: PropTypes.oneOf(['ANIMATION_START', 'ANIMATION_GO_TO', 'ANIMATION_RESET']),
    setAnimationState: PropTypes.func.isRequired
}

export default MainContent;