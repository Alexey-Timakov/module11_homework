function firstFunc(first){
    console.log(`First value - ${first}`);
    return function secondFunc(second){
        console.log(`Second value - ${second}`);
        return first + second
    }
}
resultFirstFunction = firstFunc(123);

// resultFirstFunction(321);

// console.log(resultFirstFunction); - выведется код функции
// console.log(resultFirstFunction()); - выведется undefined, т.к. не переданы параметры
console.log(`First + Second value - ${resultFirstFunction(321)}`);

// firstFunc(123)(321);