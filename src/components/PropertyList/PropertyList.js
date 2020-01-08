import { connect } from 'react-redux';
import PropertyListPure from './PropertyListPure';
import searchedListLoad from '../../actions/searchedListLoad';

const mapStateToProps = ({ searchedListReducer }) => {
    return { searchedList: searchedListReducer.searchedList };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchApartments: (payload) => dispatch(searchedListLoad(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListPure);
