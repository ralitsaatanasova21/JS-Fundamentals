function solve(arr) {
  function masiv(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          i=0;
        }
      }
    }
    return arr;
  }

  console.log(masiv(arr).join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
