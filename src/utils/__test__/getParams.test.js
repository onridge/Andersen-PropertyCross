import { getParams } from '../getParams';

const defaultParams = {
    country: 'uk',
    pretty: '1',
    action: 'search_listings',
    encoding: 'json',
    listing_type: 'buy',
    page: '1',
};

describe('/utils/getParams', () => {
    it('Get correct URL when calling getParams', () => {
        expect(getParams(defaultParams)).toBe(
            '?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1'
        );
    });

    it('Get an Empty String when calling function without arguments', () => {
        expect(getParams()).toBe('');
    });

    it('Get ? when calling function with undefined', () => {
        expect(getParams({ params: undefined })).toBe('?');
    });

    it('Get correct URL when one or more of the fields is undefined', () => {
        expect(
            getParams({
                country: 'uk',
                pretty: '1',
                action: undefined,
                encoding: undefined,
            })
        ).toBe('?country=uk&pretty=1');
    });
});
