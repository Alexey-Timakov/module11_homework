function firstFunc(first){
    console.log(`First value - ${first}`);
    return function secondFunc(second){
        console.log(`Second value - ${second}\nFirst + Second value - ${first + second}`);
    }
}
resultFirstFunction = firstFunc(123);
// console.log(resultFirstFunction);
// console.log(resultFirstFunction());
// console.log(resultFirstFunction(321));
resultFirstFunction(321);