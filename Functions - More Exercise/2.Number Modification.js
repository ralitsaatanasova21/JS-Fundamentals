function numberModification(num) {
  let sumAverage = 0;
  function average(a) {
    a = a.toString();
    for (let i = 0; i < a.length; i++) {
      let num = Number(a[i]);
      sumAverage += num;
    }
    return sumAverage;
  }
  if (average(num) <= 5) {
    //dobavqme 9 nakraq na chisloto i proverqvame pak average
  } else {
    console.log(num);
  }
}
numberModification(101);
