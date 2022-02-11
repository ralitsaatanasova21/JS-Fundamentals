function solve(arr) {
  let text = arr[0];
  let command = arr[1];
  let upperSum = 0;
  let lowerSum = 0;

  for (let letter of text) {
    letter = letter.charCodeAt(0);
    if (letter >= 65 && letter <= 90) {
      upperSum += letter;
    } else if (letter >= 97 && letter <= 122) {
      lowerSum += letter;
    }
  }
  if (command === "UPPERCASE") {
    console.log(`The total sum is: ${upperSum}`);
  } else if (command === "LOWERCASE") {
    console.log(`The total sum is: ${lowerSum}`);
  }
}
solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
