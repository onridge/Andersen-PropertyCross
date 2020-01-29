import React, { ReactChild } from 'react';
import styles from './Text.css';

interface Props {
    children: ReactChild;
}

function Text(props: Props) {
    return <p className={styles.text}>{props.children}</p>;
}

export default Text;
