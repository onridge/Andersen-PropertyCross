import React from 'react';
import { shallow } from 'enzyme';
import ApartmentDetailsPure from '../ApartmentDetailsPure';

describe('ApartmentDetails', () => {
    const currentApartment = {};
    const match = {
        params: {
            city: 'oxford',
            id: 1,
        },
    };
    const history = {
        goBack() {},
    };
    const getApartment = jest.fn().mockResolvedValue(Promise.resolve());
    const getFavoritesApartments = jest.fn();
    const addApartmentToFavorites = jest.fn();
    const wrapper = shallow(
        <ApartmentDetailsPure
            match={match}
            getApartment={getApartment}
            getFavoritesApartments={getFavoritesApartments}
            addApartmentToFavorites={addApartmentToFavorites}
            currentApartment={currentApartment}
            history={history}
        />
    );

    it('should call componentDidMount once', () => {
        expect(getApartment).toHaveBeenCalledTimes(1);
        expect(getFavoritesApartments).toHaveBeenCalledTimes(1);
    });

    it('change text after click', () => {
        const button = wrapper.find('.button').at(1);

        expect(button.text()).toBe('+');
        button.simulate('click');
        expect(addApartmentToFavorites).toHaveBeenCalledTimes(1);
    });
});
