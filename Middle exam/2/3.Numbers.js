function solve(arr) {
  let bigNums = [];
  arr = arr.split(" ").map(Number);
  let sum = arr.reduce((sum, el) => {
    return sum + el;
  });
  let average = sum / arr.length;
  arr.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      if (bigNums.length < 5) {
        bigNums.push(arr[i]);
      }
    }
  }

  if (bigNums.length > 0) {
    console.log(bigNums.join(" "));
  } else {
    console.log("No");
  }
}
solve("10 20 30 40 50");
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('-1 -2 -3 -4 -5 -6');
solve("1");
