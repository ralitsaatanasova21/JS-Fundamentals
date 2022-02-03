function solve(arr) {
  let newArr = [];
  let step = Number(arr[arr.length-1]);
  for (let i = 0; i < arr.length-1; i +=step-1) {
    newArr.push(arr[i]);
    i++;
  }
  console.log(newArr.join(" "));
}
solve(["5", "20", "31", "4", "20", "2"]);
solve(["dsa", "asd", "test", "test", "2"]);
solve(['1', '2', '3', '4', '5', '6'] )
