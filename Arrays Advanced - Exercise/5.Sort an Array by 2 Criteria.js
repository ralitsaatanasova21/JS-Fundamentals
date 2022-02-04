function solve(arr) {
  let sorted=arr.sort((b, a) => {
    return b.length - a.length || b.localeCompare(a);
  });

  console.log(sorted.join('\n'));
}
solve(["alpha", "beta", "gamma"]);
