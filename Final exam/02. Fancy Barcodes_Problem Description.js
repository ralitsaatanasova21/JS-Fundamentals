function solve(arr) {
  let productCount = Number(arr.shift());
  const regex = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

  while (productCount > 0) {
    let barcode = arr.shift();
    let match = regex.exec(barcode);
    if (match) {
      let prodGroup = "";
      let product = match.groups.product;
      for (let char of product) {
        let isNumber = +char;
        if (isNumber * 1 === isNumber) {
          prodGroup += char;
        }
      }
      if (prodGroup === "") {
        prodGroup = "00";
      }
      console.log(`Product group: ${prodGroup}`);
    } else {
      console.log("Invalid barcode");
    }
    productCount--;
  }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
