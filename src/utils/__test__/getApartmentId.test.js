import getApartmentId from '../getApartmentId';

const apartment = {
    latitude: 51.735924,
    bedroom_number: 2,
};

describe('/utils/getApartmentId', () => {
    it('Get the ID from the Object apartment', () => {
        expect(getApartmentId(apartment)).toBe(10347184800);
    });
});
