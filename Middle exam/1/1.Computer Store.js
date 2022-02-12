function solve(arr) {
  let sum = 0;
  for (let parts of arr) {
    if (parts !== "special" && parts !== "regular") {
      if (parts < 0) {
        console.log("Invalid price!");
      } else {
        sum += Number(parts);
      }
    }
  }

  let taxes = sum * 0.2;
  let totalPrice = taxes + sum;

  for (let parts of arr) {
    if (parts == "special") {
      totalPrice *= 0.9;
    }
  }

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(
      `Congratulations you've just bought a new computer!\nPrice without taxes: ${sum.toFixed(
        2
      )}$\nTaxes: ${taxes.toFixed(
        2
      )}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
    );
  }
}
// solve(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// solve(["regular"]);
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
