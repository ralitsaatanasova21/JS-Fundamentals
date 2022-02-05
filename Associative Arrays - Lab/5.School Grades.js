function solve(arr) {
  let map = new Map();
  for (let row of arr) {
    row = row.split(" ");
    let name = row.shift();
    let grades = row.map(Number);

    if (map.has(name)) {
      let curGrade = map.get(name);
      for (let grade of grades) {
        curGrade.push(grade);
      }
      map.set(name, curGrade);
    } else {
      map.set(name, grades);
    }
  }
  let sortedGrades = Array.from(map.entries());
  sortedGrades.sort((a, b) => average(a, b));
    for (let entry of sortedGrades) {
      console.log(`${entry[0]}: ${entry[1].join(", ")}`);
    }
  function average(a, b) {
    let sumA = 0;
    let sumB = 0;
    let gradeA = a[1];
    let gradeB = b[1];
    gradeA.forEach((ga) => (sumA += ga));
    gradeB.forEach((gb) => (sumB += gb));
    let averageA = sumA / gradeA.length;
    let averageB = sumB / gradeB.length;
    return averageA - averageB;
  }

}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
