function convertor(obj) {
  let parse = JSON.parse(obj);

  for (const keys of Object.keys(parse)) {
    console.log(`${keys}: ${parse[keys]}`);
  }
}
convertor('{"name": "George", "age": 40, "town": "Sofia"}');
