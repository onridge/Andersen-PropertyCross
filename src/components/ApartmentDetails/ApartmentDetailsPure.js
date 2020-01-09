import React from 'react';
import PropTypes from 'prop-types';
import ApartmentView from '../ApartmentView/ApartmentView';
import Layout from '../Layout/Layout';
import Loader from '../loader/loader';

export default class ApartmentDetails extends React.PureComponent {
    componentDidMount() {
        const { id, city } = this.props.match.params;

        this.props.getApartment({
            apartmentId: id,
            city,
            numberPage: 1,
        });
    }

    render() {
        const { currentApartment, match } = this.props;

        if (!currentApartment) {
            return <Loader />;
        }

        return (
            <Layout>
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
    currentApartment: PropTypes.object,
    match: PropTypes.object,
};
