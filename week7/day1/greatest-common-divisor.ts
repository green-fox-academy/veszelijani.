function greatestCommonDivisor (numberA, numberB) {

    if (numberB < 1) {
        return numberA;
    }
    return greatestCommonDivisor(numberB, numberA % numberB);
}
console.log(greatestCommonDivisor(100, 150));