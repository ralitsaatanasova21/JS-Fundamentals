function solve(arr) {
  arr.pop();
  let reg = />{2}(?<town>[A-z]+)<{2}(?<price>[0-9.]+)!(?<quantity>[0-9]+)/g;
  let sum = 0;
  let town;

  console.log(`Bought furniture:`);
  for (let line of arr) {
    let valid;
    while ((valid = reg.exec(line)) !== null) {
      town = valid.groups.town;
      let price = valid.groups.price;
      let quantity = valid.groups.quantity;
      sum += price * quantity;
      console.log(town);
    }
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
solve([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
