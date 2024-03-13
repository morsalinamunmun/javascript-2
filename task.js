var fruits = ['Apple', 'Banana', 'Orange'];
fruits.indexOf('Banana');
fruits[1] = 'Mangoes';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;
if(myScore >= 80){
    console.log('A');
}else if(myScore >= 60){
    console.log('B');
}else if(myScore >= 50){
    console.log('C');
}else if(myScore >= 40){
    console.log('D');
}
else{
    console.log("F");
}


if(tomScore >= 80){
    console.log('A');
}else if(tomScore >= 60){
    console.log('B');
}else if(tomScore >= 50){
    console.log('C');
}else if(tomScore >= 40){
    console.log('D');
}
else{
    console.log("F");
}


if(janeScore >= 80){
    console.log('A');
}else if(janeScore >= 60){
    console.log('B');
}else if(janeScore >= 50){
    console.log('C');
}else if(janeScore >= 40){
    console.log('D');
}
else{
    console.log("F");
}


if(peterScore >= 80){
    console.log('A');
}else if(peterScore >= 60){
    console.log('B');
}else if(peterScore >= 50){
    console.log('C');
}else if(peterScore >= 40){
    console.log('D');
}
else{
    console.log("F");
}


if(johnScore >= 80){
    console.log('A');
}else if(johnScore >= 60){
    console.log('B');
}else if(johnScore >= 50){
    console.log('C');
}else if(johnScore >= 40){
    console.log('D');
}
else{
    console.log("F");
}


//largest no
var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2 && num1 > num3){
    console.log('num1 largest');
}else if(num2 > num3 && num2 > num1){
    console.log('number 2 largest');
}
else{
    console.log('number 3 largest');
}


//
var fast = 9;
var second = 8;
var third = 9;
if(fast == second || second == third || fast == third){
    console.log('Somodibahu thrivug');
}