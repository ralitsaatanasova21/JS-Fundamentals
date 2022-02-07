function emplo(arr) {
  for (let names of arr) {
    let obj = {
      name: names,
      number: names.length,
    };
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
  }
}
emplo([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
