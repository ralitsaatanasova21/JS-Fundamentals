function bit(g) {
    let days = 0;
    let goldForDay = Number(g[0]);
    let oneBitcoinPrice = 11949.16;
    let oneGramGoldPrice = 67.51;
    let total = 0;
    let countBitcoins = 0;
    let dayOfFirstB = 0;

    for (let i = 0; i < g.length; i++) {
        goldForDay = Number(g[i]);
        days++;

        if (days % 3 == 0) {
            total +=Number((goldForDay * 0.70)* oneGramGoldPrice);
        } else {
            total += Number(goldForDay * oneGramGoldPrice);
        }


        while (total >= oneBitcoinPrice) {
            if (dayOfFirstB === 0) {
                dayOfFirstB = days;
            }
            total -= oneBitcoinPrice;
            countBitcoins++;
        }

    }

    console.log(`Bought bitcoins: ${countBitcoins}`);
    if (countBitcoins >= 1) {

        console.log(`Day of the first purchased bitcoin: ${dayOfFirstB}`);
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`);
}
bit([100, 200, 300])