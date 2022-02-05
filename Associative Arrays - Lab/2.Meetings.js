function solve(arr) {
  let asocArr = {};
  for (let row of arr) {
    row = row.split(" ");
    let day = row[0];
    let name = row[1];
    if (asocArr.hasOwnProperty(day)) {
        console.log(`Conflict on ${day}!`);
    } else {
        asocArr[day] = [name];
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let key in asocArr) {
    console.log(`${key} -> ${asocArr[key]}`);
  }
}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
