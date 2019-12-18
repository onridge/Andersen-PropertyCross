import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.css';

function Description(props) {
    return <p className={styles.description}>{props.children}</p>;
}

Description.propTypes = {
    children: PropTypes.node,
};

export default Description;
