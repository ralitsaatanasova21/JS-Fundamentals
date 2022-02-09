function solve(text) {
  let reg = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let names = [];
  let valid;
  while ((valid = reg.exec(text)) !== null) {
    names.push(valid[0]);
  }
  console.log(names.join(" "));
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
