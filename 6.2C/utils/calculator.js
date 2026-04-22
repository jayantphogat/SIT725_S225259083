function calculateDiscount(price, discount) {
    if (price < 0 || discount < 0) {
        throw new Error("Price and discount cannot be negative");
    }

    if (discount > 100) {
        throw new Error("Discount cannot be more than 100");
    }

    return price - (price * discount / 100);
}

module.exports = { calculateDiscount };