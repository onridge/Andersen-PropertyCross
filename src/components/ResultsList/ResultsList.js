import { connect } from 'react-redux';
import ResultsListPure from './ResultsListPure';
import getApartmentsList from '../../actions/getApartmentsList';

const mapStateToProps = ({ apartmentsListReducer }) => {
    return { apartmentsList: apartmentsListReducer.apartmentsList };
};

const mapDispatchToProps = (dispatch) => ({
    getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsListPure);
