function getCoordinate() {
    return new Promise((resolve) => {
        return navigator.geolocation.getCurrentPosition((position) => {
            const coordinate = {
                center_lat: position.coords.latitude,
                center_long: position.coords.longitude,
            };

            return resolve(coordinate);
        });
    });
}

export default getCoordinate;
