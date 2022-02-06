function solve(num) {
  function numbers(nums) {
    if (nums < 10) {
      nums.toString();
      let firstNum = Number(nums[0]);
      return `$`.repeat(firstNum);
    } else if (nums === 10) {
      return `$`.repeat(10);
    }
  }
  let procent = numbers(num);
  if (num < 100) {
    console.log(`${num}% [${procent}.......]`);
    console.log(`Still loading...`);
  } else {
    console.log(`${num}% Complete!`);
    console.log(`[${procent}]`);
  }
}
solve(100);
solve(30)
