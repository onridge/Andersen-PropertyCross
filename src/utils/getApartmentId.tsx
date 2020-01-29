function getApartmentId(apartment) {
    const { latitude, bedroom_number: bedroomNumber } = apartment;

    return latitude * bedroomNumber * 1e8;
}

export default getApartmentId;
