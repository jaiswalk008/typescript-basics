"use strict";
function add1(num1, num2) {
    //using if..else for different data type
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    else
        return +num1 + +num2;
}
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
//generics
let numResults = [];
let textResults = [];
//TypeScript can "guess" the type of a value and it is called infering the value
const button = document.querySelector('button');
//In case of button TS can infer its type because we are using 'button'
//typescript does not know about the html file so it doesnot whether button element will be null
// or not so we use '!' for telling typescript to ignore null check and if its null use num2
button.addEventListener('click', () => {
    const result = add1(num1.value, num2.value);
    const resultString = add1(num1.value, num2.value);
    numResults.push(result);
    textResults.push(resultString);
    displayResults({ val: result, timestamp: new Date() });
    displayResults({ val: resultString, timestamp: new Date() });
    console.log(numResults);
    console.log(textResults);
});
function displayResults(obj) {
    console.log(obj.val);
}
//using promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello World');
    }, 1000);
});
promise.then((res) => console.log(res.split(' '))).catch(err => console.log(err));
