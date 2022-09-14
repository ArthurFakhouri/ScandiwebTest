export function arrayEquals(array1, array2) {
    if (array1.length !== array2.length) return false;

    let i = 0;
    for (; i < array1.length && array1[i] === array2[i]; i++);
    if (i === array1.length)
        return true;
    return false;
}

export function getAmountItemsBag(bag) {
    return bag.reduce((prevValue, curValue) => prevValue + curValue.amount, 0);
}

export function getTotal(bag, selectedCurrency, currencies) {
    if (currencies.length) {
        const symbol = currencies[selectedCurrency].symbol;
        const total = bag.reduce((prevValue, curValue) => {
            const { amount, product } = curValue;
            const { prices } = product;
            return prevValue + (amount * prices[selectedCurrency].amount);
        }, 0).toFixed(2);
        return { symbol: symbol, total: total };
    }
    return { symbol: "", total: "" };
}