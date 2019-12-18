import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.css';

function Layout(props) {
    return <main className={styles.container}>{props.children}</main>;
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
