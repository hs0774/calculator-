const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight= document.getElementById('8');
const nine = document.getElementById('9');
const span = document.getElementById('span');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplyy = document.getElementById('multiply');
const dividee = document.getElementById('divide');


zero.addEventListener('click', function(){
    if(operator===undefined && num1===undefined){
        span.textContent=0;
        span.value=0;
          num1=0;
    }
    else if(operator===undefined){
        num1=num1*10+0;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=0;
        span.value=0;
        num2=0;
    }
    else {
        num2=num2*10+0;
        span.value=num2;
        span.textContent=num2;
    }
});

one.addEventListener('click',function(){

    if(operator===undefined && num1===undefined){
        span.textContent=1;
        span.value=1;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+1;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=1;
        span.value=1;
        num2=1;
    }
    else {
        num2=num2*10+1;
        span.value=num2;
        span.textContent=num2;
    }
});

two.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=2;
        span.value=2;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+2;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=2;
        span.value=2;
        num2=span.value;
    }
    else {
        num2=num2*10+2;
        span.value=num2;
        span.textContent=num2;
    }
});

three.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=3;
        span.value=3;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+3;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=3;
        span.value=3;
        num2=span.value;
    }
    else {
        num2=num2*10+3;
        span.value=num2;
        span.textContent=num2;
    }
});

four.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=4;
        span.value=4;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+4;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=4;
        span.value=4;
        num2=span.value;
    }
    else {
        num2=num2*10+4;
        span.value=num2;
        span.textContent=num2;
    }
});

five.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=5;
        span.value=5;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+5;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=5;
        span.value=5;
        num2=span.value;
    }
    else {
        num2=num2*10+5;
        span.value=num2;
        span.textContent=num2;
    }
});

six.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=6;
        span.value=6;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+6;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=6;
        span.value=6;
        num2=span.value;
    }
    else {
        num2=num2*10+6;
        span.value=num2;
        span.textContent=num2;
    }
});

seven.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=7;
        span.value=7;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+7;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=7;
        span.value=7;
        num2=span.value;
    }
    else {
        num2=num2*10+7;
        span.value=num2;
        span.textContent=num2;
    }
});

eight.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=8;
        span.value=8;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+8;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=8;
        span.value=8;
        num2=span.value;
    }
    else {
        num2=num2*10+8;
        span.value=num2;
        span.textContent=num2;
    }
});

nine.addEventListener('click',function(){
    if(operator===undefined && num1===undefined){
        span.textContent=9;
        span.value=9;
        num1=span.value;
    }
    else if(operator===undefined){
        num1=num1*10+9;
        span.value=num1;
        span.textContent=num1;
    }
    else if(operator && num1 && num2===undefined || isNaN(num2)){
        span.textContent=9;
        span.value=9;
        num2=span.value;
    }
    else {
        num2=num2*10+9;
        span.value=num2;
        span.textContent=num2;
    }
});


clear.addEventListener('click',function(){
    span.textContent='0';
    operator= undefined;
    num1= undefined;
    num2=undefined;
});

plus.addEventListener('click',function(){
    console.log(num1,num2,operator);
    if(num2===0 && operator==='/'){
        num1=undefined;
        num2=undefined;
        span.textContent='enter numbers correctly';
        operator=undefined;
        return;
    }
    else if(num1,num2,operator){
        num1=operate(num1,operator,num2);
        span.textContent=num1;
        operator='+';
        span.value=num1;
        num2=undefined;
        console.log(num1,num2,operator);
    }
    else{
        operator='+';
        console.log(num1,num2,operator);
    }

})

minus.addEventListener('click', function(){
    if(num2===0 && operator==='/'){
        num1=undefined;
        num2=undefined;
        span.textContent='enter numbers correctly';
        operator=undefined;
        return;
    }
    else if(num1,num2,operator){
        num1=operate(num1,operator,num2);
        span.textContent=num1;
        num2=undefined;
        operator='-';
    }
    else{
        operator='-';
    }
})

multiplyy.addEventListener('click', function(){
    if(num2===0 && operator==='/'){
        num1=undefined;
        num2=undefined;
        span.textContent='enter numbers correctly';
        operator=undefined;
        return;
    }
    else if(num1,num2,operator){
        num1=operate(num1,operator,num2);
        span.textContent=num1;
        num2=undefined;
        operator='*';
    }
    else{
        operator='*';
    }
})

dividee.addEventListener('click', function(){
    if(num2===0 && operator==='/'){
        num1=undefined;
        num2=undefined;
        span.textContent='enter numbers correctly';
        operator=undefined;
        return;
    }
    else if(num1,num2,operator){
        num1=operate(num1,operator,num2);
        span.textContent=num1;
        span.value=num1;
        num2=undefined;
        operator='/';
    }
    else{
        operator='/';
    }
})

equal.addEventListener('click',function(){

    if(num1,operator,num2){
        num1=operate(num1,operator,num2);
        span.textContent=num1;
        num2=undefined;
        operator=undefined;
    }
});

let num1, num2 ,operator,leftoverOp,leftovernum2,leftovernum1;


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) return span.textContent='Cant do that,press clear';
    return num1 / num2;
}

function operate (num1,operator,num2) {
    switch(operator){
        case '+':
          return add(num1,num2);
        case '-':
          return subtract(num1,num2);
        case '*':
          return  multiply(num1,num2);
        case '/':
         if(num2===0) return span.textContent='press clear';
         else return divide(num1,num2)
        default:
          return 'invalid operator';
    }
}

