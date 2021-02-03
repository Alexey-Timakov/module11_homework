let testArray = [10,11,99,,0,null,NaN,"err",50,"",[123,"123"]];
let numCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

console.log(testArray);

for (let i = 0; i < testArray.length; i++){
    if (!Number.isNaN(testArray[i])) // Можно закомментировать строку, если считаем, что NaN - число. 
        checkAndCount(i);
    // console.log(typeof(testArray[i]));
}

// Функция проверки типа на "number" и подсчета количества элементов
function checkAndCount(item){
    let tempValue = testArray[item];
    switch (typeof(tempValue)){
        case "number":
            ++numCount;
            if (tempValue != 0 && tempValue % 2 == 0) ++evenCount;
            if (tempValue != 0 && tempValue % 2 != 0) ++oddCount;
            if (tempValue == 0) ++zeroCount;
            break;
    }   
}

console.log(`Total elements - ${testArray.length}
Number amount - ${numCount}
"0" amount - ${zeroCount}
Even amount - ${evenCount}
Odd amount - ${oddCount}`);