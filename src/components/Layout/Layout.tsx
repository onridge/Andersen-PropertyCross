import React, { ReactChild } from 'react';
import styles from './Layout.css';

interface Props {
    children: ReactChild;
}

function Layout(props: Props) {
    return <main className={styles.container}>{props.children}</main>;
}

export default Layout;
