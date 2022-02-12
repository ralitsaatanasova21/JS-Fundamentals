function solve(arr) {
  let targets = arr.shift().split(" ").map(Number);
  arr.pop();
  let shoots = arr.map(Number);
  let numShots = 0;

  for (let i = 0; i < shoots.length; i++) {
    let currShot = shoots[i];
    let currTarget = targets[currShot];

    if (currTarget > -1) {
      targets[currShot] = -1;
      numShots++;
      for (let j = 0; j < targets.length; j++) {
        if (targets[j] > -1) {
          if (targets[j] > currTarget) {
            targets[j] -= currTarget;
          } else {
            targets[j] += currTarget;
          }
        }
      }
    }
  }

  console.log(`Shot targets: ${numShots} -> ${targets.join(" ")}`);
}
solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
