import React, { PureComponent } from 'react';
import InfiniteScroll from '../infiniteScroll/InfiniteScroll';
import Text from '../TextContent/Text/Text';
import Loader from '../loader/loader';
import ResultsListElement from '../ResultsListElement/ResultsListElement';
import Layout from '../Layout/Layout';
import getApartmentId from '../../utils/getApartmentId';
import styles from './ResultsList.css';

interface Apartment {
    lister_url: string;
    thumb_url: string;
    price_formatted: string;
    bedroom_number: number;
    title: string;
}

interface MatchInterface {
    params: {
        city: string;
    };
}

interface Props {
    apartmentsList: Apartment[];
    totalResults: number;
    getApartmentsList: (payload: { city: string; pageNumber: number }) => any;
    match: MatchInterface;
}

export default class ResultsListPure extends PureComponent<Props> {
    state = {
        currentPage: 1,
    };

    componentDidMount() {
        const { apartmentsList } = this.props;

        if (!apartmentsList.length) {
            this.loadApartments();
        }
    }

    loadApartments = () => {
        return this.props
            .getApartmentsList({ city: this.props.match.params.city, pageNumber: this.state.currentPage })
            .then(() => {
                return this.setState({
                    currentPage: this.state.currentPage + 1,
                });
            });
    };

    render() {
        const { apartmentsList, match, totalResults } = this.props;

        if (!apartmentsList.length) {
            return <Loader />;
        }
        return (
            <Layout>
                <InfiniteScroll updateList={this.loadApartments}>
                    <div className={styles.wrapper}>
                        <Text>
                            Result List {apartmentsList.length} of {totalResults}
                        </Text>
                    </div>
                    <ul>
                        {apartmentsList.map((apartment) => (
                            <ResultsListElement
                                key={apartment.lister_url}
                                city={match.params.city}
                                image={apartment.thumb_url}
                                id={getApartmentId(apartment)}
                                price={apartment.price_formatted}
                                bedroomNumber={apartment.bedroom_number}
                                title={apartment.title}
                            />
                        ))}
                    </ul>
                </InfiniteScroll>
            </Layout>
        );
    }
}
