import { includes } from 'ramda';
import { getParams } from '../utils/getParams';

const defaultParams = {
    country: 'uk',
    pretty: '1',
    action: 'search_listings',
    encoding: 'json',
    listing_type: 'buy',
    page: '1',
};

const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api';

function validatingCodeResponse(data) {
    const responseCode = Number(data.response.application_response_code);
    const validatingCodes = [100, 101, 110];

    return includes(responseCode, validatingCodes);
}

function apartmentsService(payload) {
    const params = { ...defaultParams, ...payload };

    return fetch(apiUrl + getParams(params))
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (validatingCodeResponse(data)) {
                return data.response;
            }
            throw new Error('There was a problem with your search');
        });
}

export default apartmentsService;
