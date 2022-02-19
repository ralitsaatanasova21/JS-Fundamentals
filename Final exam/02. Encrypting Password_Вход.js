function solve(arr) {
  let capacity = +arr.shift();
  let obj = {};
  let count = 0;
  let curr=arr.shift();

  while (curr!= "Statistics") {
    for (let row of arr) {
      row = row.split("=");
      let command = row[0];
      if (command === "Add") {
        let name = row[1];
        let sent = +row[2];
        let receive = +row[3];

        if (!obj[name]) {
          obj[name] = {
            sent: sent,
            receive: receive,
          };
          count++;
        }
        // obj[name].sent += sent;
        // obj[name].receive += receive;
      } else if (command === "Message") {
        let sender = row[1];
        let receiver = row[2];
        if (obj[sender] && obj[receiver]) {
          obj[sender].sent += 1;
          obj[receiver].receive += 1;
        }

        if (obj[sender].sent + obj[sender].receive >= capacity) {
          console.log(`${sender} reached the capacity!`);
          delete obj[sender];
          count--;
        }
        if (obj[receiver].sent + obj[receiver].receive >= capacity) {
          console.log(`${receiver} reached the capacity!`);
          delete obj[receiver];
          count--;
        }
      } else if (command === "Empty") {
        let name = row[1];
        if (obj[name]) {
          delete obj[name];
          count--;
        }
        if (name === "All") {
          obj = {};
          count = 0;
        }
      }
    }
  }
  obj = Object.entries(obj);
  obj.sort((nameA, nameB) => {
    let nameAA = nameA[0];
    let nameBB = nameB[0];
    let propA = nameA[1];
    let propB = nameB[1];

    if (propB.receive !== propA.receive) {
      return propB.receive - propA.receive;
    } else {
      return nameAA.localeCompare(nameBB);
    }
  });

  console.log(`Users count: ${count}`);
  for (let kvp of obj) {
    let name = kvp[0];
    let number = kvp[1];
    console.log(`${name} - ${number.sent + number.receive}`);
  }
}
// solve([
//   "10",
//   "Add=Berg=9=0",
//   "Add=Kevin=0=0",
//   "Message=Berg=Kevin",
//   "Add=Mark=5=4",
//   "Statistics",
// ]);
// solve(["12",
// "Add=Bonnie=3=5",
// "Add=Johny=4=4",
// "Empty=All",
// "Add=Bonnie=3=3",
// "Statistics"]);
solve([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);
