function solve(arr) {
  let usernames = arr.shift().split(", ");
  arr.pop();
  let blacklisted = 0;
  let lost = 0;

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split(" ");
    let command = row[0];

    switch (command) {
      case "Blacklist":
        let name = row[1];
        if (usernames.includes(name)) {
          let index = usernames.indexOf(name);
          usernames[index] = "Blacklisted";
          console.log(`${name} was blacklisted.`);
          blacklisted++;
        } else {
          console.log(`${name} was not found.`);
        }
        break;

      case "Error":
        let index = Number(row[1]);
        if (index >= 0 && index < usernames.length) {
          if (usernames[index] != "Blacklisted" && usernames[index] != "Lost") {
            console.log(`${usernames[index]} was lost due to an error.`);
            usernames[index] = "Lost";
            lost++;
          }
        }
        break;

      case "Change":
        let indexx = Number(row[1]);
        let newName = row[2];
        if (indexx >= 0 && indexx < usernames.length) {
          console.log(
            `${usernames[indexx]} changed his username to ${newName}.`
          );
          usernames[indexx] = newName;
        }
        break;
    }
  }
  console.log(`Blacklisted names: ${blacklisted}`);
  console.log(`Lost names: ${lost}`);
  console.log(`${usernames.join(" ")}`);
}
// solve(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
solve([
  "Mike, John, Eddie, William",

  "Error 3",

  "Error 3",

  "Change 0 Mike123",

  "Report",
]);
