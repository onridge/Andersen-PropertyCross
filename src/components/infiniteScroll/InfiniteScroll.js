import React from 'react';
import PropTypes from 'prop-types';
import { throttle } from '../../utils/throttle';

export default class InfiniteScroll extends React.PureComponent {
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollDown);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollDown);
    }

    onScrollDown = throttle(1000, () => {
        const windowEnd = document.documentElement.getBoundingClientRect().bottom;

        if (windowEnd < document.documentElement.clientHeight + 100) {
            this.props.updateList();
        }
    });

    render() {
        return <div>{this.props.children}</div>;
    }
}

InfiniteScroll.propTypes = {
    updateList: PropTypes.func,
    children: PropTypes.node,
};
