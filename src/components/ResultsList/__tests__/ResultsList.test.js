import React from 'react';
import { shallow } from 'enzyme';
import ResultsListPure from '../ResultsListPure';

describe('ResultsList', () => {
    const match = {
        params: {
            city: 'oxford',
        },
    };
    const getApartmentList = jest.fn().mockResolvedValue(Promise.resolve());
    const apartmentsList = [];

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ResultsListPure getApartmentsList={getApartmentList} apartmentsList={apartmentsList} match={match} />
        );
    });

    it('should call componentDidMount once', () => {
        expect(getApartmentList).toHaveBeenCalledTimes(1);
    });

    it('state change after calling componentDidMount', () => {
        expect(wrapper.state()).toEqual({ currentPage: 2 });
    });
});
