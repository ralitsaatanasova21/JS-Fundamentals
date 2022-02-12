function solve(arr) {
    let students=Number(arr.shift().split(' '));
    let lectures=Number(arr.shift().split(' '));
    let firstBonus=Number(arr.shift().split(' '));
    let maxBonus=0;
    let number=0;

    for(let i=0; i<students; i++){
        let attendance=Number(arr[i]);
        let bonus=attendance/ lectures * (5 + firstBonus);
        if(bonus>maxBonus){
            maxBonus=bonus;
            number=attendance;
        }

    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${number} lectures.`);
}
solve(["5", "25", "30", "12", "19", "24", "16", "20"]);
// solve([
//   "10",
//   "30",
//   "14",
//   "8",
//   "23",
//   "27",
//   "28",
//   "15",
//   "17",
//   "25",
//   "26",
//   "5",
//   "18",
// ]);
