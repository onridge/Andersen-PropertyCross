import React from 'react';
import PropTypes from 'prop-types';
import ApartmentView from '../ApartmentView/ApartmentView';
import Layout from '../Layout/Layout';
import Loader from '../loader/loader';
import Text from '../TextContent/Text/Text';
import styles from './ApartmentDetails.css';

export default class ApartmentDetails extends React.PureComponent {
    componentDidMount() {
        const { id, city } = this.props.match.params;

        this.props.getApartment({
            apartmentId: id,
            city,
            numberPage: 1,
        });
        this.props.getFavoritesApartments();
    }

    handleClick = () => {
        const { match, currentApartment, deleteFromFavorites, addApartmentToFavorites, isFavorite } = this.props;
        const apartment = { ...currentApartment, city: match.params.city };

        isFavorite ? deleteFromFavorites(apartment) : addApartmentToFavorites(apartment);
    };

    render() {
        const { currentApartment, match, history, isFavorite } = this.props;

        if (!currentApartment) {
            return <Loader />;
        }

        return (
            <Layout>
                <div className={styles.wrapper}>
                    <button type="button" className={styles.button} onClick={history.goBack}>
                        Back
                    </button>
                    <Text>Property Details</Text>
                    <button type="button" className={styles.button} onClick={this.handleClick}>
                        {isFavorite ? '-' : '+'}
                    </button>
                </div>
                <ApartmentView
                    city={match.params.city}
                    image={currentApartment.thumb_url}
                    price={currentApartment.price_formatted}
                    bedroomNumber={currentApartment.bedroom_number}
                    summary={currentApartment.summary}
                    title={currentApartment.title}
                />
            </Layout>
        );
    }
}

ApartmentDetails.propTypes = {
    getApartment: PropTypes.func,
    isFavorite: PropTypes.bool,
    currentApartment: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
    deleteFromFavorites: PropTypes.func,
    addApartmentToFavorites: PropTypes.func,
    getFavoritesApartments: PropTypes.func,
};