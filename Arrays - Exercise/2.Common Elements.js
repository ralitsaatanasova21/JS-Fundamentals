function solve(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i])) {
      console.log(arr2[i]);
    }
  }
}
solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
solve(
  ["S", "o", "f", "t", "U", "n", "i", " "],

  ["s", "o", "c", "i", "a", "l"]
);
