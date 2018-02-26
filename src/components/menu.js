import React from 'react';
import '../styles/scss/components/navigation.css';
import '../styles/scss/components/social-links.css';

const Menu = () => {
    return (
        <nav className="navigation">
            <button className="button navigation__btn">
                <i className="icon icon-menu"></i>
            </button>

            <ul className="social-links navigation__social-links">
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.facebook.com" target="_blank" rel='noreferrer noopener'>
                        <i className="icon icon-facebook"></i>
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.twitter.com" target="_blank" rel='noreferrer noopener'>
                        <i className="icon icon-twitter"></i>
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.dribble.com" target="_blank" rel='noreferrer noopener'>
                        <i className="icon icon-dribble"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
