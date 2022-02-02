function solve(n) {
  for (let i = 0; i < n; i++) {
    let one = String.fromCharCode(97 + i);
    for (let j = 0; j < n; j++) {
      let two = String.fromCharCode(97 + j);
      for (let k = 0; k < n; k++) {
        let three = String.fromCharCode(97 + k);
        console.log(`${one}${two}${three}`);
      }
    }
  }
}
solve("3");
