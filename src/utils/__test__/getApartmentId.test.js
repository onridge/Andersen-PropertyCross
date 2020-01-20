import getApartmentId from '../getApartmentId';

const apartment = {
    latitude: 51.735924,
    price_high: 240000,
};

describe('/utils/getApartmentId', () => {
    it('Get the ID from the Object apartment', () => {
        expect(getApartmentId(apartment)).toBe(240051.735924);
    });
});
