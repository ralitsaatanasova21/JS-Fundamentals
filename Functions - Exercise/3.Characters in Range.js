function solve(first, second) {
  let firstAsNumber = first.charCodeAt(0);
  let secondAsNumber = second.charCodeAt(0);
  let smallest = Math.min(firstAsNumber, secondAsNumber);
  let biggest = Math.max(firstAsNumber, secondAsNumber);
  let newArr = [];
  for (let i = smallest + 1; i < biggest; i++) {
    let char = String.fromCharCode(i);
    newArr.push(char);
  }
  console.log(newArr.join(" "));
}
solve("a", "d");
