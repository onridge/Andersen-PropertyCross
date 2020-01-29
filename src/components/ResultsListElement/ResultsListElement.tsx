import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../TextContent/Text/Text';
import styles from './ResultsListElement.css';

interface Props {
    city: string;
    image: string;
    id: number;
    price: string;
    bedroomNumber: number;
    title: string;
}

function ResultsListElement({ city, image, id, price, bedroomNumber, title }: Props) {
    return (
        <li>
            <Link to={`/results/${city}/${id}`} className={styles.link}>
                <div className={styles.cart}>
                    <img src={image} className={styles.image} alt="apartment" />
                    <div className={styles.wrapper}>
                        <div className={styles.price}>
                            <Text>{price}</Text>
                        </div>
                        <Text>Bedrooms: {bedroomNumber}</Text>
                        <Text>{title}</Text>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default ResultsListElement;
