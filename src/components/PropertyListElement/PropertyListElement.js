import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import styles from './PropertyListElement.css';

class PropertyListElement extends React.PureComponent {
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

PropertyListElement.propTypes = {
    item: PropTypes.string,
};

export default PropertyListElement;
