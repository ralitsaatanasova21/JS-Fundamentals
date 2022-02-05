function solve(arr) {
  let neighborhood = new Map();
  let currNeighborhood = arr.shift().split(", ");

  for (let street of currNeighborhood) {
    neighborhood.set(street, []);
  }
  for (let person of arr) {
    person = person.split(" - ");
    let personStreet = person[0];
    let curPerson = person[1];

    if (neighborhood.has(personStreet)) {
      neighborhood.get(personStreet).push(curPerson);
    }
  }
  let sortedNeib = Array.from(neighborhood.entries());
  sortedNeib.sort((a, b) => {
    return b[1].length - a[1].length;
  });
  for (let entry of sortedNeib) {
    console.log(`${entry[0]}: ${entry[1].length}`);
    for (let person of entry[1]) {
      console.log(`--${person}`);
    }
  }
}
solve([
  "Abbey Street, Herald Street, Bright Mews",

  "Bright Mews - Garry",

  "Bright Mews - Andrea",

  "Invalid Street - Tommy",

  "Abbey Street - Billy",
]);
