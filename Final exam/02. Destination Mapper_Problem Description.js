function solve(text) {
  let regex = /(\=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
  let sum = 0;
  let destinations = [];

  let valid;
  while ((valid = regex.exec(text)) !== null) {
    let name = valid.groups.name;
    sum += +name.length;
    destinations.push(name);
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${sum}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");
