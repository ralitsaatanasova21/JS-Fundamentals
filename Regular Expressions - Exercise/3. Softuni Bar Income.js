function solve(arr) {
  arr.pop();
  let reg =
    /%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<quantity>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/g;
  let name;
  let product;
  let price;
  let sum = 0;

  for (let line of arr) {
    let valid;
    while ((valid = reg.exec(line)) !== null) {
      name = valid.groups.name;
      product = valid.groups.product;
      let quantity = valid.groups.quantity;
      price = valid.groups.price * quantity;
      sum += price;
      console.log(`${name}: ${product} - ${price.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}
// solve([
//   "%George%<Croissant>|2|10.3$",
//   "%Peter%<Gum>|1|1.3$",
//   "%Maria%<Cola>|1|2.4$",
//   "end of shift",
// ]);

solve([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
