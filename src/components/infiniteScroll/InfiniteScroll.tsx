import React, { PureComponent, ReactChild } from 'react';
import { throttle } from '../../utils/throttle';

interface Props {
    updateList: () => any;
    children: ReactChild;
}

export default class InfiniteScroll extends PureComponent<Props> {
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
