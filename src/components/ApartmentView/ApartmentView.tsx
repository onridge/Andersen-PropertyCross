import React from 'react';
import styles from './ApartmentView.css';

interface ApartmentViewProps {
    city: string;
    image: string;
    price: string;
    bedroomNumber: number;
    summary: string;
    title: string;
}

function ApartmentView({ city, image, price, bedroomNumber, summary, title }: ApartmentViewProps) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
            <img className={styles.img} src={image} alt="apartment" />
            <p className={styles.rooms}>
                {bedroomNumber} bedroom, {bedroomNumber} bathroom
            </p>
            <p>{summary}</p>
        </div>
    );
}

export default ApartmentView;
