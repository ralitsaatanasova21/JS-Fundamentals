function solve(arr) {
  let neighbour = arr.shift().split("@").map(Number);
  arr.pop();
  let house = 0;

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    let jump = Number(command[1]);

    if (house + jump < neighbour.length) {
      house += jump;
      if (neighbour[house] === 0) {
        console.log(`Place ${house} already had Valentine's day.`);
      } else if (neighbour[house] > 0 && neighbour[house] <= 2) {
        neighbour[house] = 0;
        console.log(`Place ${house} has Valentine's day.`);
      } else if (neighbour[house] > 2) {
        neighbour[house] -= 2;
      }
    } else {
      house = 0;
      if (neighbour[0] > 2) {
        neighbour[0] -= 2;
      } else if (neighbour[0] == 0) {
        console.log(`Place ${house} already had Valentine's day.`);
      } else {
        neighbour[0] = 0;
        console.log(`Place ${house} has Valentine's day.`);
      }
    }
  }
  console.log(`Cupid's last position was ${house}.`);
  let isTrue = true;
  let count = 0;
  for (let j = 0; j < neighbour.length; j++) {
    if (neighbour[j] > 0) {
      isTrue = false;
      count++;
    }
  }
  if (isTrue) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${count} places.`);
  }
}
solve(["10@10@10@2", "Jump 1", "Jump 2", "Love! "]);
// solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love! "]);
