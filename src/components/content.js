import React from 'react';

class Content extends React.Component {

    render() {
        return (
            <article className="article">
                <p className="article__subheader">Product design</p>

                <div className="article__header">
                    <h1>
                        <p>Hot Air Balloon</p>
                        <p>as a Workshop</p>
                        <p>Game</p>
                    </h1>
                </div>

                <p className="article__desc">
                    One answear is that Truth pertains to the possibility that the event will occur. If true - it must
                    occur and if false - it cannot occur.
                </p>
                <button className="button button--gradient button--icon">
                    <span>Read Article</span>
                    <i className="icon icon-arrow-right"></i>
                </button>
            </article>
        )
    }
}

export default Content;
