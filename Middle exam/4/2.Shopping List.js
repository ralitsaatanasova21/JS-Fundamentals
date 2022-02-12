function solve(arr) {
  let list = arr.shift().split("!");
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let [command, product, newProduct] = arr[i].split(" ");
    switch (command) {
      case "Urgent":
        if (!list.includes(product)) {
          list.unshift(product);
        }
        break;

      case "Unnecessary":
        if (list.includes(product)) {
          let nomer = list.indexOf(product);
          list.splice(nomer, 1);     
        }
        break;

      case "Correct":
        if (list.includes(product)) {
          let nomer = list.indexOf(product);
          list[nomer]=newProduct;
        }
        break;

      case "Rearrange":
        if (list.includes(product)) {
          let nomer = list.indexOf(product);
          list.splice(nomer, 1);
          list.push(product);
        }
        break;
    }
  }

  console.log(list.join(", "));
}
// solve([
//   "Tomatoes!Potatoes!Bread",

//   "Unnecessary Milk",

//   "Urgent Tomatoes",

//   "Go Shopping!",
// ]);
solve([
  "Milk!Pepper!Grapes!Salt",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",

  "Rearrange Grapes",

  "Correct Tomatoes Potatoes",

  "Go Shopping!",
]);
