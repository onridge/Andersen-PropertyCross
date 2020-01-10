import React from 'react';
import { connect } from 'react-redux';
import FavoritesListPure from './FavoritesListPure';
import getFavoritesApartments from '../../actions/getFavoritesApartments';

const mapStateToProps = ({ favoritesListReducer }) => {
    return { favorites: favoritesListReducer.favorites };
};

const mapDispatchToProps = (dispatch) => ({
    getFavoritesApartments: () => dispatch(getFavoritesApartments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesListPure);
