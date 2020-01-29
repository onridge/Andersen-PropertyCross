import { connect } from 'react-redux';
import ResultsListPure from './ResultsListPure';
import getApartmentsList from '../../actions/getApartmentsList';

const mapStateToProps = ({ apartmentsListReducer }) => {
    const { apartmentsList, totalResults } = apartmentsListReducer;

    return { apartmentsList, totalResults };
};

const mapDispatchToProps = (dispatch) => ({
    getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsListPure);
