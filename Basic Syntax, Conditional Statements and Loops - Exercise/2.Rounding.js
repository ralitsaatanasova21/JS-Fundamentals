function rounding(firstNum,secondNum){

if(secondNum>15){
    secondNum=15;
}
firstNum =firstNum.toFixed(secondNum)

console.log(parseFloat(firstNum));
}
rounding(10.5, 3)