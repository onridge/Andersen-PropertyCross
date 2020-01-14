import { path } from 'ramda';
import apartmentsService from '../services/apartmentsService';
import getCoordinate from '../services/getCoordinate';

function getLocation() {
    return getCoordinate().then((coordinate) => {
        return apartmentsService({ centre_point: `${coordinate.center_lat},${coordinate.center_long}` }).then((data) =>
            path(['locations', 0, 'place_name'], data)
        );
    });
}

export default getLocation;
