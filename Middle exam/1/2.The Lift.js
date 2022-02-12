function solve(arr) {
  let waitingPeople = Number(arr[0]);
  let state = arr[1].split(" ").map(Number);

  for (let i = 0; i < state.length; i++) {
    let num = Number(state[i]);
    if (num == 0) {
      if (waitingPeople >= 4) {
        num = 4;
        waitingPeople -= 4;
      } else {
        num = waitingPeople;
        waitingPeople = 0;
      }
      state[i] = num;
    } else {
      let count = 4 - num;
      state[i] = num + count;
      waitingPeople -= count;
    }
    if (waitingPeople == 0 && state[state.length - 1]<4) {
      console.log(`The lift has empty spots!`);
      console.log(state.join(" "));
      break;
    }
    if (waitingPeople > 0 && i===state.length - 1) {
      console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
      console.log(state.join(" "));
      break;
    }
    if (waitingPeople == 0 && state[state.length - 1]===4) {
      console.log(state.join(" "));
      break;
    }
  }
}
//solve(["15", "0 0 0 0"]);
solve(["20", "0 2 0"]);
