function solve(n) {
    let box=1;
  console.log(`<div class="chessboard">`);
  for (let j = 1; j <= n; j++) {
    console.log(`  <div>`);
    for (let i = 1; i <= n; i++) {
      if (box % 2 == 0) {
        console.log(`    <span class="white"></span>`);
        console.log(`    <span class="black"></span>`);
        console.log(`    <span class="white"></span>`);
        
      } else {
        console.log(`    <span class="black"></span>`);
        console.log(`    <span class="white"></span>`);
        console.log(`    <span class="black"></span>`);

      }
      box++;
    }
    console.log(`  </div>`);
  }
  console.log(`  </div>`);
}
solve(3);
