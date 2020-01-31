import React, { PureComponent } from 'react';
import { searchStorage } from '../../constants/constants';
import PropertyListElement from '../PropertyListElement/PropertyListElement';
import Text from '../TextContent/Text/Text';

interface Props {
    searchedList: [];
    fetchApartments: (key: string) => any;
}

export default class PropertyList extends PureComponent<Props> {
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
