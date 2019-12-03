import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchStorage } from '../../constants/constants';
import searchedListLoad from '../../actions/searchedListLoad';
import PropertyListElement from '../PropertyListElement/PropertyListElement';
import Text from '../interfaceElements/TextContent/Text/Text';

class PropertyList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchApartments(searchStorage);
    }

    render() {
        const { searchedList } = this.props;

        return (
            <div>
                <Text>Recent searches:</Text>
                <ul>
                    {searchedList.length > 0 ? (
                        searchedList.map((item) => <PropertyListElement key={item} item={item} />)
                    ) : (
                        <Text>Search history is clear</Text>
                    )}
                </ul>
            </div>
        );
    }
}

PropertyList.propTypes = {
    searchedList: PropTypes.array,
    fetchApartments: PropTypes.func,
};

const mapStateToProps = (state) => ({
    searchedList: state.searchedList.searchedList,
});

function mapDispatchToProps(dispatch) {
    return {
        fetchApartments: (payload) => dispatch(searchedListLoad(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);
