import React, {Component} from 'react';
import Ballon from './components/balloon';
import Content from './components/content';
import Menu from './components/menu';
import logo from './assets/images/logo.svg'

class App extends Component {

    constructor(){
        super();

        this.state = {
            animationClass: ''
        }
    }

    componentDidMount(){
        this.setState({animationClass: 'animation-start'})
    }
    render() {
        return (
            <div className="container">
                <div className={`main-content ${this.state.animationClass}`}>

                    <div className="main-content__nav">
                        <Menu></Menu>
                    </div>

                    <div className="main-content__article">
                        <div className="main-content__img">
                            <img src={logo} alt="" className="logo"/>
                        </div>
                        <Content></Content>
                    </div>

                    <div className="main-content__aside">
                        <Ballon></Ballon>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
