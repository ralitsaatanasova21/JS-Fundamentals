function solve(arr) {
    let first=[];
    let second=[];
    let k=arr.shift();
    first=arr.slice(0,k);
    second=arr.slice(arr.length-k,arr.length);
    console.log(first.join(' '));
    console.log(second.join(' '));
}
solve([
  2,

  7, 8, 9,
]);
