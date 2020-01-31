import React from 'react';
import ApartmentView from '../ApartmentView/ApartmentView';
import Layout from '../Layout/Layout';
import Loader from '../loader/loader';
import Text from '../TextContent/Text/Text';
import styles from './ApartmentDetails.css';

interface Apartment {
    thumb_url: string;
    price_formatted: string;
    bedroom_number: number;
    summary: string;
    title: string;
}

interface MatchInterface {
    params: {
        id: number;
        city: string;
    };
}

interface HistoryInterface {
    goBack: () => any;
}

interface GetApartmentInterface {
    apartmentId: number;
    city: string;
    numberPage: number;
}

interface Props {
    getApartment: (payload: GetApartmentInterface) => any;
    isFavorite: boolean;
    currentApartment: Apartment;
    match: MatchInterface;
    history: HistoryInterface;
    deleteFromFavorites: (Apartment) => any;
    addApartmentToFavorites: (Apartment) => any;
    getFavoritesApartments: () => any;
}

export default function ApartmentDetails(props: Props) {
    React.useEffect(() => {
        const { id, city } = props.match.params;

        props.getApartment({
            apartmentId: id,
            city,
            numberPage: 1,
        });
    });

    React.useEffect(() => {
        props.getFavoritesApartments();
    });

    function handleClick() {
        const { match, currentApartment, deleteFromFavorites, addApartmentToFavorites, isFavorite } = props;
        const apartment = { ...currentApartment, city: match.params.city };

        isFavorite ? deleteFromFavorites(apartment) : addApartmentToFavorites(apartment);
    }

    const { currentApartment, match, history, isFavorite } = props;

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
                <button type="button" className={styles.button} onClick={handleClick}>
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
