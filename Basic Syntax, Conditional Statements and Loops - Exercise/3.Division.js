function division(g) {
    if (g % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (g % 7 === 0) {
        console.log(`The number is divisible by 7`);
    } else if (g % 6 === 0) {
        console.log(`The number is divisible by 6`);
    } else if (g % 3 === 0) {
        console.log(`The number is divisible by 3`);
    } else if (g % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }

}
division([30])