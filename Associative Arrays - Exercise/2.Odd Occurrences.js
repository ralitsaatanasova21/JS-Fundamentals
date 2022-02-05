function solve(str) {
  let words = str.toLowerCase().split(" ");
  let map = new Map();

  for (let word of words) {
    let num = 0;
    if (map.has(word)) {
      num = map.get(word);
    }
    num++;
    map.set(word, num);
  }
  let entries = Array.from(map);
  let filtredEl = entries.filter((el) => {
    return el[1] % 2 !== 0;
  });
  let name = [];
  for (let entry of filtredEl) {
    name.push(entry[0]);
  }
  console.log(`${name.join(" ")}`);
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
