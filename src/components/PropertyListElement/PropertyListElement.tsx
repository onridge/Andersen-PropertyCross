import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import styles from './PropertyListElement.css';

interface Props {
    item: string;
}

class PropertyListElement extends PureComponent<Props> {
    state = {};

    handleClick = (value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { item } = this.props;

        if (value) {
            return <Redirect to={`/results/${item}`} />;
        }

        return (
            <li className={styles.item}>
                <button className={styles.button} type="button" onClick={this.handleClick}>
                    {item}
                </button>
            </li>
        );
    }
}

export default PropertyListElement;
