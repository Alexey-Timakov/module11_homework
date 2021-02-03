// let testValue = 0;
// let testValue = 1;
// let testValue = 4;
let testValue = 14;
// let testValue = 123;
// let testValue = 997;

function checkForSimple(value){
    let simpleStatus = false; //По умолчанию считаем, что число НЕ является простым
    let i = 2; //Проверку начинаем с числа 2, т.к. на 1 все числа делятся
    let devideCount = 1; //Простое число делится на 1 и на само себя, т.е. максимальное число делителей = 2, если > 2, то число НЕ простое.
    do {
        simpleStatus = (value % i == 0)? true:false; // Если число без остатка делится на i, то увеличиваем счетчик делителей devideCount
        if (simpleStatus) devideCount++;
            // console.log(value, i, simpleStatus, devideCount);
        i++;
    }while (devideCount < 3 && i <= value);
    // console.log(devideCount);
return devideCount;
}
// Для 0 и 1 выдводим сообщение об ошибке
function resultErrorConsole(value){
    console.log(`${value} не относится к простым числам`)
}

// Функция вывода результата в консоль:
function resultSimpleOrNot(value, result){
    if (result == 2) console.log(`Число ${value} - является простым`);
    else console.log (`Число ${value} - НЕ является простым`)
}

if (testValue <=1000 && testValue >= 0){
// Для 0 и 1 определим свое действие через еще одну функцию. Для других чисел вызываем функцию проверки значения:
switch(testValue){
    case 0:
    case 1:
        resultErrorConsole(testValue);
        break;
    default:
        resultSimpleOrNot(testValue, checkForSimple(testValue));
}
}
else {
    console.log("Ошибка диапазона");
}