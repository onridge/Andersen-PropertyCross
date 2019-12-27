import { connect } from 'react-redux';
import ApartmentDetailsPure from './ApartmentDetailsPure';
import getApartment from '../../actions/getApartment';

const mapStateToProps = ({ apartmentsListReducer }) => {
    return {
        currentApartment: apartmentsListReducer.currentApartment,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApartment: (payload) => dispatch(getApartment(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetailsPure);
