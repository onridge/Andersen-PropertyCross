import { connect } from 'react-redux';
import ApartmentDetailsPure from './ApartmentDetailsPure';
import getApartment from '../../actions/getApartment';
import addToFavoritesList from '../../actions/addToFavoritesList';

const mapStateToProps = ({ apartmentsListReducer }) => {
    return {
        currentApartment: apartmentsListReducer.currentApartment,
        isFavorite: apartmentsListReducer.isFavorite,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApartment: (payload) => dispatch(getApartment(payload)),
        addToFavoritesList: (payload) => dispatch(addToFavoritesList(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetailsPure);
