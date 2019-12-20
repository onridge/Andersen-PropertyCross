import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Text from '../TextContent/Text/Text';
import styles from './ResultsListElement.css';

function ResultsListElement({ city, image, id, price, bedroomNumber, title }) {
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

ResultsListElement.propTypes = {
    bedroomNumber: PropTypes.number,
    id: PropTypes.number,
    city: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
};

export default ResultsListElement;
