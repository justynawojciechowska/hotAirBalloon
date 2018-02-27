import PropTypes from 'prop-types';
import {Component} from 'react';

class CloudsContainer extends Component {
    static propTypes = {
        containerSelector: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired
    };

    state = {
        facX: 0,
        facY: 0
    };

    containerNode = null;

    componentDidMount() {
        this.containerNode = document.querySelector(this.props.containerSelector);

        this.containerNode.addEventListener('mousemove', this.onMouseMove, false);
    }

    componentWillUnmount() {
        if (this.containerNode) {
            this.containerNode.removeEventListener('mousemove', this.onMouseMove)
        }
    }

    onMouseMove = (e) => {
        const middleY = this.containerNode.offsetHeight / 2,
            middleX = this.containerNode.offsetWidth / 2;

        if (this.props.animationState === 'ANIMATION_START') {
            this.setState(
                {
                    facX: ((e.clientX - middleX) / 100),
                    facY: ((e.clientY - middleY) / 100)
                })
        }
    }

    render() {
        return this.props.render(this.state);
    }
}

export default CloudsContainer;
