import React, {Component} from 'react';
import Ballon from './components/balloon';
import Content from './components/content';
import Menu from './components/menu';
import logo from './assets/images/logo.svg'

class App extends Component {

    constructor() {
        super();

        this.state = {
            animationClass: '',
            startBalloonAnimation: false,
            resetAnimation: false,
            disabledReadArticleBtn: false
        }
    }

    componentDidMount() {
        this.setState({animationClass: 'animation-start'})
    }

    contentAnimationEnd(e) {
        const bodyContainsClass = document.body.classList.contains('animation-ended');

        if ((e.target == e.currentTarget) && bodyContainsClass) {
            setTimeout(() => {
                this.setState({
                    resetAnimation: true,
                    startBalloonAnimation: false,
                    disabledReadArticleBtn: false
                })
            }, 2000)
        } else {
            this.setState({
                resetAnimation: false
            })
        }
    }

    startBalloonAnimation = () => {
        this.setState({
            startBalloonAnimation: true,
            disabledReadArticleBtn: true
        })
    };

    cloudAnimation = () => {

    }

    render() {
        return (
            <div className="container" onMouseMove={this.cloudAnimation}>
                <div className={`main-content ${this.state.animationClass}`}
                     onAnimationEndCapture={this.contentAnimationEnd.bind(this)}>

                    <div className="main-content__nav">
                        <Menu></Menu>
                    </div>

                    <div className="main-content__article">
                        <div className="main-content__img">
                            <img src={logo} alt="" className="logo"/>
                        </div>
                        <Content disabledReadArticleBtn={this.state.disabledReadArticleBtn}
                            startBalloonAnimation={this.startBalloonAnimation}></Content>
                    </div>

                    <div className="main-content__aside">
                        <Ballon resetAnimation={this.state.resetAnimation}
                                startBalloonAnimation={this.state.startBalloonAnimation}></Ballon>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
