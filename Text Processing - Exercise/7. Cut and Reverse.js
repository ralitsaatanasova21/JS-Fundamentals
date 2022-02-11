function solve(word) {
  let index = word.length / 2;
  let firstPart = word.substring(0, index).split("").reverse();
  let secondPart = word.substring(index).split("").reverse();

  console.log(firstPart.join(""));
  console.log(secondPart.join(""));
}
solve("tluciffiDsIsihTgnizamAoSsIsihT");
