import React from 'react';
import PropTypes from 'prop-types';
import { searchStorage } from '../../constants/constants';
import PropertyListElement from '../PropertyListElement/PropertyListElement';
import Text from '../TextContent/Text/Text';

export default class PropertyList extends React.PureComponent {
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
