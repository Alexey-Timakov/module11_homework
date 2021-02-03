let firstNumber = 3;
let secondNumber = 10;

let fullTime = (secondNumber - firstNumber + 1) * 1000;
let i = firstNumber;

const pauseId = setInterval(function(){
    if (i <= secondNumber){
        console.log(i++);
    }
}, 1000,);

setTimeout(function(){
    clearInterval(pauseId);
},fullTime)