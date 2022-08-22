'use strict';

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNonRepetitiveRandomNumberFunctionFactory() {

    const arrRandomNumbersDelivered = [];

    return function () {

        while (true) {
            let randomNumber = getRandomInRange(1, 100);

            if(arrRandomNumbersDelivered.indexOf(randomNumber) === -1) {
                arrRandomNumbersDelivered.push(randomNumber);
                return {randomNumber, arrRandomNumbersDelivered};
            }
        }
    }
}

let getNonRepetitiveRandomNumber = getNonRepetitiveRandomNumberFunctionFactory();

console.log(getNonRepetitiveRandomNumber());
console.log(getNonRepetitiveRandomNumber());
console.log(getNonRepetitiveRandomNumber());