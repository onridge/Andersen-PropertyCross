import React from 'react';
import { shallow } from 'enzyme';
import mockFetch from 'jest-fetch-mock';
import SearchBarPure from '../SeachBarPure';

describe('SearchBarPure', () => {
    let wrapper;

    jest.mock('node-fetch', () => mockFetch());

    beforeEach(() => {
        wrapper = shallow(<SearchBarPure />);
    });

    it('should have initialState', () => {
        const initialState = { value: '', isRedirect: false, errorMessage: '' };

        expect(wrapper.state()).toEqual(initialState);
    });

    it('updates input field in state', () => {
        const city = 'london';

        wrapper.find('.inputField').simulate('change', {
            target: {
                value: city,
            },
        });
        expect(wrapper.state().value).toEqual(city);
    });

    it('should state.isRedirect false if state.value is empty', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {},
        });
        expect(wrapper.state('isRedirect')).toBeFalsy();
    });
});
