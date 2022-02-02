function fuel(distance, passengers, priceFuel){
    let neededFuel=(distance/100)*7;
    neededFuel+=passengers*0.1;
    let sum=neededFuel*priceFuel;
    console.log(`Needed money for that trip is ${sum} lv.`);


}
fuel(260, 9, 2.49 )