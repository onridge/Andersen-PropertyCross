import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.css';

function ErrorContent({ errorMessage }) {
    return <p className={styles.errorMessage}>{errorMessage}</p>;
}

ErrorContent.propTypes = {
    errorMessage: PropTypes.string,
};

export default ErrorContent;
