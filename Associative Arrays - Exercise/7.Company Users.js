function solve(arr) {
  let listCompany = {};
  for (let item of arr) {
    let [company, number] = item.split(" -> ");
    if (!listCompany.hasOwnProperty(company)) {
      listCompany[company] = [];
    }
    if (!listCompany[company].includes(number)) {
      listCompany[company].push(number);
    }
  }
  let sorted = Object.keys(listCompany);
  sorted.sort((a, b) => a.localeCompare(b));

  for (let company of sorted) {
    console.log(company);
    for (let emp of listCompany[company]) {
      console.log(`-- ${emp}`);
    }
  }
}
solve([
  "SoftUni -> AA12345",

  "SoftUni -> BB12345",

  "Microsoft -> CC12345",

  "HP -> BB12345",
]);
