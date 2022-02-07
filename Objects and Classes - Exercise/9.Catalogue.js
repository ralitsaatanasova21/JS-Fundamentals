function solve(arr) {
  let masiv = [];
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i].split(" : ");
    let obj = {
      name: product[0],
      price: product[1],
    };
    masiv.push(obj);
  }
  masiv.sort((a, b) => a.name.localeCompare(b.name));

  let curLetter = " ";

  for (let key of masiv) {
    if (key.name.charAt(0).toUpperCase() === curLetter) {
      console.log(`  ${key.name}: ${key.price}`);
    } else {
      curLetter = key.name.charAt(0).toUpperCase();
      console.log(`${curLetter}`);
      console.log(`  ${key.name}: ${key.price}`);
    }
  }
}
solve([
  "Appricot : 20.4",

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  "Anti-Bug Spray : 15",

  "T-Shirt : 10",
]);
