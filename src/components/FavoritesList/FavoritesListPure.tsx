import React, { PureComponent } from 'react';
import getApartmentId from '../../utils/getApartmentId';
import Layout from '../Layout/Layout';
import ResultsListElement from '../ResultsListElement/ResultsListElement';
import Loader from '../loader/loader';
import Text from '../TextContent/Text/Text';
import styles from './FavoritesList.css';

interface FavoriteInterface {
    lister_url: string;
    city: string;
    thumb_url: string;
    price_formatted: string;
    bedroom_number: number;
    title: string;
}

interface Props {
    favorites: FavoriteInterface[];
    getFavoritesApartment: () => any;
}

export default class FavoritesListPure extends PureComponent<Props> {
    componentDidMount() {
        this.props.getFavoritesApartments();
    }

    render() {
        const { favorites } = this.props;

        if (!favorites) {
            return <Loader />;
        }

        return (
            <Layout>
                <div className={styles.wrapper}>
                    <Text>Favorites Apartments</Text>
                </div>
                {favorites.length ? (
                    <ul>
                        {favorites.map((favorite) => (
                            <ResultsListElement
                                key={favorite.lister_url}
                                city={favorite.city}
                                image={favorite.thumb_url}
                                id={getApartmentId(favorite)}
                                price={favorite.price_formatted}
                                bedroomNumber={favorite.bedroom_number}
                                title={favorite.title}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className={styles.emptyList}>
                        <Text>You have not added any properties to your favorites </Text>
                    </div>
                )}
            </Layout>
        );
    }
}
