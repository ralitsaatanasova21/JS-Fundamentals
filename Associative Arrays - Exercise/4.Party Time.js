function solve(arr) {
  let guestList = {
    vip: [],
    regular: [],
  };
  let guest = arr.shift();
  while (guest != "PARTY") {
    let firstChar = guest[0];
    if (isNaN(firstChar)) {
      guestList.regular.push(guest);
    } else {
      guestList.vip.push(guest);
    }
    guest = arr.shift();
  }
  for (let guest of arr) {
    if (guestList.vip.includes(guest)) {
      let index = guestList.vip.indexOf(guest);
      guestList.vip.splice(index, 1);
    } else if (guestList.regular.includes(guest)) {
      let index = guestList.regular.indexOf(guest);
      guestList.regular.splice(index, 1);
    }
  }
  let people = guestList.vip.length + guestList.regular.length;

  console.log(people);
  console.log(guestList.vip.join("\n"));
  console.log(guestList.regular.join("\n"));
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
