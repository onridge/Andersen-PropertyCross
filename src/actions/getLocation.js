import apartmentsService from '../services/apartmentsService';
import getCoordinate from '../services/getCoordinate';

function getLocation() {
    return getCoordinate().then((coordinate) =>
        apartmentsService({ centre_point: `${coordinate.center_lat},${coordinate.center_long}` })
    );
}

export default getLocation;
