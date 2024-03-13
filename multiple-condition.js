var isGraduated = true;
var salary = 30000;
var isHome = false;
// if(isGraduated == true){
//     console.log('biye kore feli')
// }
// else{
//     console.log('biye hobe na');
// }

if(isGraduated == true && salary >= 50000){
    console.log('biye korbo');
}
else{
    console.log('biye korbo na');
}

if(isGraduated == true && salary >= 50000 && isHome == true){
    console.log('biye korbo');
}
else{
    console.log('biye korbo na');
}

if(isGraduated == true && salary >= 30000 || isHome == true){
    console.log('biye korbo');
}
else{
    console.log('biye korbo na');
}

var money = 10;
var danishPrice = 45;
var butterBread = 35;
var tostBiscuit = 20;

if(danishPrice < money){
    console.log('danish khabo');
}else if(butterBread < money){
    console.log('butter bon khabo');
}
else if(tostBiscuit < money){
    console.log('toast biscuit diye khabo');
}else{
    console.log('sudu ca khabo');
}