import React from 'react';
import PropTypes from 'prop-types';
import styles from './ApartmentView.css';

function ApartmentView({ city, image, price, bedroomNumber, summary, title }) {
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

ApartmentView.propTypes = {
    city: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    bedroomNumber: PropTypes.number,
    summary: PropTypes.string,
    title: PropTypes.string,
};

export default ApartmentView;
