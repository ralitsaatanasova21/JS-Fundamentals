function solve(waitingPeople) {
  let students = Number(waitingPeople[3]);
  let hour = 0;
  waitingPeople.pop();

  let studentsPerHour =
    Number(waitingPeople[0]) +
    Number(waitingPeople[1]) +
    Number(waitingPeople[2]);

  while (students > 0) {
    if (hour % 4 == 0 && hour >= 4) {
      hour++;
      continue;
    } else {
      students -= studentsPerHour;
    }
    hour++;
  }
  if (hour % 4 == 0 && hour>0) {
    hour++;
  }
  console.log(`Time needed: ${hour}h.`);
}
solve(["5", "6", "4", "20"]);
// solve(["1", "2", "3", "45"]);
// solve(['3','2','5','40']);
