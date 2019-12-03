import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertyListElement.css';

function PropertyListElement(props) {
    return <li className={styles.item}>{props.item}</li>;
}

PropertyListElement.propTypes = {
    item: PropTypes.string,
};

export default PropertyListElement;
