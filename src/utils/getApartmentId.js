function getApartmentId(apartment) {
    const { latitude, price_high: priceHigh } = apartment;

    return latitude + priceHigh;
}

export default getApartmentId;
