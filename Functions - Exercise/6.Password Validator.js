function solve(pass) {
  let isCorrect=true;

  if (!checkLength(pass)) {
    console.log(`Password must be between 6 and 10 characters`);
    isCorrect=false;
  }
  if (!word(pass)) {
    console.log(`Password must consist only of letters and digits`);
    isCorrect=false;
  }
  if (twoNums(pass) < 2) {
    console.log(`Password must have at least 2 digits`);
    isCorrect=false;
  }

  if (isCorrect) {
    console.log(`Password is valid`);
  }

  function twoNums(num) {
    let sumNumbers = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] >= "0" && num[i] <= "9") {
        sumNumbers++;
      }
    }
    return sumNumbers;
  }
  function word(letter) {
    for (let i = 0; i < letter.length; i++) {
      if (
        (letter[i] >= "0" && letter[i] <= "9") ||
        (letter[i] >= "a" && letter[i] <= "z") ||
        (letter[i] >= "A" && letter[i] <= "Z")
      ) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  function checkLength(land) {
    if (land.length >= 6 && land.length <= 10) {
      return true;
    }
    return false;
  }
}
// solve("logIn");
solve('MyPass123');
// solve("Pa$s$s");
