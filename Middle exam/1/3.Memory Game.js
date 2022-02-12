function solve(arr) {
    let command=arr.shift();
    console.log(command);

    // while(command!='end'){
        for(let i=0; i<arr.length; i++){
            let [firstElement, secondElement]=arr[i].split(' ');
            firstElement=Number(firstElement);
            secondElement=Number(secondElement);
            console.log(firstElement);
        }

    // }

}
solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
