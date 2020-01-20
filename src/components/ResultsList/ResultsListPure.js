import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from '../infiniteScroll/InfiniteScroll';
import Text from '../TextContent/Text/Text';
import Loader from '../loader/loader';
import ResultsListElement from '../ResultsListElement/ResultsListElement';
import styles from './ResultsList.css';
import Layout from '../Layout/Layout';

export default class ResultsListPure extends React.PureComponent {
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
                                id={apartment.latitude + apartment.price_high}
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

ResultsListPure.propTypes = {
    apartmentsList: PropTypes.array,
    totalResults: PropTypes.number,
    getApartmentsList: PropTypes.func,
    match: PropTypes.object,
};
