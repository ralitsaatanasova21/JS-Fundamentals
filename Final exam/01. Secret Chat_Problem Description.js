function solve(arr) {
  let message = arr.shift();
  arr.pop();

  for (let row of arr) {
    let [command, index, replace] = row.split(":|:");
    switch (command) {
      case "InsertSpace":
        insertspace(index);
        break;
      case "Reverse":
        reversed(index);
        break;
      case "ChangeAll":
        changeAll(index, replace);
        break;
    }
  }
  function insertspace(index) {
      index = Number(index);
      let first=message.substring(0, index);
      let sec=message.substring(index);
      message=first+ ' ' + sec;
    
    console.log(message);
  }

  function reversed(substring) {
    if (message.includes(substring)) {
      let start = message.indexOf(substring);
      let cutted = message.substring(start, start+substring.length).split('').reverse().join("");
      let firstPart = message.substring(0, start);
      let thirdPart = message.substring(start + substring.length);
      message = firstPart + thirdPart + cutted;
      console.log(message);
    } else {
      console.log(`error`);
    }
  }

  function changeAll(old, newstr) {
    while (message.includes(old)) {
        let index = message.indexOf(old);
        let part = message.substring(index, index + old.length);
        message = message.replace(part, newstr);
      }
      console.log(message);
  }
  console.log(`You have a new text message: ${message}`);
}
solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
// solve([
//   "Hiware?uiy",
//   "ChangeAll:|:i:|:o",
//   "Reverse:|:?uoy",
//   "Reverse:|:jd",
//   "InsertSpace:|:3",
//   "InsertSpace:|:7",
//   "Reveal",
// ]);
