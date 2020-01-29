import React, { ReactChild } from 'react';
import styles from './Description.css';

interface Props {
    children: ReactChild;
}

function Description(props: Props) {
    return <p className={styles.description}>{props.children}</p>;
}

export default Description;
