function solve(arr) {
  let myArr = Array.from(arr);
  myArr = myArr.map((x) => Number(x));
  let Qfood = myArr[0]*1000;
  let qhay = myArr[1]*1000;
  let Qcover = myArr[2]*1000;
  let weight = myArr[3]*1000;
  let days = 30;
  for (let day = 1; day <= days; day++) {
    if (Qfood <= 0 || qhay <= 0 || Qcover <= 0) {
      break;
    }
    Qfood -= 300;
    if (day % 2 == 0) {
      qhay -= Qfood * 0.05;
    }
    if (day % 3 == 0) {
      Qcover -= weight * 0.3333;
    }
  }
  let first=Qfood / 1000;
  let second = qhay / 1000;
  let third =Qcover/1000;
  if(first>0 && second>0 && third>0){
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(first.toFixed(2))}, Hay: ${second.toFixed(2)}, Cover: ${third.toFixed(2)}.`
    );
  }else{
    console.log('Merry must go to the pet store!');
  }
}
solve(["10", "5", "5.2", "1"]);
