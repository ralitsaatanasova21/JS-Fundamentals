function solve(arr) {
    let first=arr[0];
    let second=arr[1];
    let third=arr[2];
    let concatenated=first+second;

    for(let letter of concatenated){
        let currLetter=letter.charCodeAt(0);
        if(letter)
        console.log(letter);

    }
}
solve(["ilovepizza", "ihatevegetables", "orange"]);
