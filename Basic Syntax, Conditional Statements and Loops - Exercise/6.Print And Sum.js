function print(a, b) {
    let sum = 0;
    let array= [];
    for (let i = a; i <= b; i++) {
        sum += i;
        array.push(i);
    }
    console.log(array.join(' '));
    console.log(`Sum: ${sum}`);

}
print(5, 10)