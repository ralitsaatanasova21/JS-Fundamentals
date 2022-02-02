function mina(startYield) {
    let total = 0;
    let day = 0;
    while (startYield >= 100) {
      total += startYield - 26;
      day++;
      startYield -= 10;
    }
    if (total > 26) {
      total-=26;
    }
    console.log(day);
    console.log(total);
  }
mina(111);
