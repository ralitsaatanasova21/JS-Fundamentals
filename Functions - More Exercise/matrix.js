function Matrix(num) {
    let arr=[];
    for (let index = 0; index < num; index++) {
        arr[0][index]=num
    }
    console.log(arr.join(' '));
}
Matrix (3)