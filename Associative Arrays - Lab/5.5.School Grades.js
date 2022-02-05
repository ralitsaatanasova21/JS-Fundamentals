function solve(arr) {
  let school = {};
  let sum = 0;

  for (let row of arr) {
    row = row.split(" ");
    let name = row.shift();
    let grades = row;
    school[name]=[];


    if (school.hasOwnProperty(name)) {
      school[name].push(grades);
    } else {
        let curG=school[name];
        for (let grade of grades) {
            curG.push(grade);
          }
      school[name].push(curG+grades)
    }
  }
  for (let key in school) {
    console.log(`${key} - ${school[key]}`);
  }
  // console.log(school);
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
