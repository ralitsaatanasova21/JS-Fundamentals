function solve(arr) {
  let message = arr.shift();
  arr.pop();

  for (let row of arr) {
    row = row.split("|");
    let command = row[0];

    if (command == "ChangeAll") {
      let substr = row[1];
      let replacement = row[2];
      while (message.includes(substr)) {
        message = message.replace(substr, replacement);
      }
    } else if (command == "Insert") {
      let index = +row[1];
      let value = row[2];
      let first = message.slice(0, index);
      let last = message.slice(index);
      message = first + value + last;
    } else if (command == "Move") {
      let nums = +row[1];
      let firs = message.slice(0, nums);
      let last = message.slice(nums);
      message = last + firs;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
