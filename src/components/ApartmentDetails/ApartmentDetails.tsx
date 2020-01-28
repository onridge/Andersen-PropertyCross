import { connect } from 'react-redux';
import { includes } from 'ramda';
import ApartmentDetailsPure from './ApartmentDetailsPure';
import getApartment from '../../actions/getApartment';
import getFavoritesApartments from '../../actions/getFavoritesApartments';
import deleteFromFavorites from '../../actions/deleteFromFavorites';
import addApartmentToFavorites from '../../actions/addApartmentToFavorites';
import getApartmentId from '../../utils/getApartmentId';

function checkApartmentInFavorites(favoriteListReducer, id) {
    const { favorites } = favoriteListReducer;
    const apartment = favorites.find((apart) => Math.abs(id) === getApartmentId(apart));

    return includes(apartment, favorites);
}

const mapStateToProps = ({ apartmentsListReducer, favoritesListReducer }, props) => {
    const { id } = props.match.params;

    return {
        currentApartment: apartmentsListReducer.currentApartment,
        isFavorite: checkApartmentInFavorites(favoritesListReducer, id),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApartment: (payload) => dispatch(getApartment(payload)),
        getFavoritesApartments: () => dispatch(getFavoritesApartments()),
        deleteFromFavorites: (payload) => dispatch(deleteFromFavorites(payload)),
        addApartmentToFavorites: (payload) => dispatch(addApartmentToFavorites(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetailsPure);
