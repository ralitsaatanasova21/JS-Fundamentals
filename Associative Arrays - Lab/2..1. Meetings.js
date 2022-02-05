function solve(arr) {
  let week = {};
  for (let row of arr) {
    row = row.split(" ");
    let day = row[0];
    let name = row[1];
    if (!week.hasOwnProperty(day)) {
      week[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (let key in week) {
    console.log(`${key} -> ${week[key]}`);
  }
}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
