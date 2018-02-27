import React from 'react';
import '../styles/scss/components/article.css';
import classnames from "classnames";
import PropTypes from "prop-types";


class Content extends React.Component {
    static propTypes = {
        animationState: PropTypes.oneOf(['ANIMATION_START', 'ANIMATION_GO_TO', 'ANIMATION_RESET']),
    };

    readArticleClick = (e) => {
        this.props.setAnimationState('ANIMATION_GO_TO')
    };

    render() {
        return (
            <article className="article">
                <p className={classnames('article__subheader', {
                    'article__subheader--animation-in': this.props.animationState === 'ANIMATION_START',
                    'article__subheader--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                    'article__subheader--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                })}>
                    Product design
                </p>

                <div className={classnames('article__header', {
                    'article__header--animation-in': this.props.animationState === 'ANIMATION_START',
                    'article__header--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                    'article__header--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                })}>
                    <h1>
                        <p>Hot Air Balloon</p>
                        <p>as a Workshop</p>
                        <p>Game</p>
                    </h1>
                </div>

                <p className={classnames('article__desc', {
                    'article__desc--animation-in': this.props.animationState === 'ANIMATION_START',
                    'article__desc--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                    'article__desc--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                })}>
                    One answear is that Truth pertains to the possibility that the event will occur. If true - it must
                    occur and if false - it cannot occur.
                </p>
                <button className={classnames('button button--gradient button--icon', {
                    'button--animation-in': this.props.animationState === 'ANIMATION_START',
                    'button--animation-out': this.props.animationState === 'ANIMATION_GO_TO',
                    'button--animation-reset': this.props.animationState === 'ANIMATION_RESET',
                })}

                        onClick={this.readArticleClick}
                        disabled={this.props.disabledReadArticleBtn}>
                    <span>Read Article</span>
                    <i className="icon icon-arrow-right"></i>
                </button>
            </article>
        )
    }
}

export default Content;
