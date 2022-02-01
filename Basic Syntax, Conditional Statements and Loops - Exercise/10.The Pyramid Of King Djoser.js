function piramid(base, increment) {
    let currbase=base;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let steps=0;

    while(currbase>2) {
        let marble = currbase*4 - 4;
        let stone = currbase*currbase-marble;
        totalStone += stone;
        steps++;

        if (steps % 5 ==0) {
            totalLapis += marble;
        }else{
            totalMarble += marble;
        }
        currbase-=2;

    }
    steps++;
    let gold = currbase*currbase;
    let stone = Math.ceil(totalStone * increment);
    let marble = Math.ceil(totalMarble * increment);
    let lapis = Math.ceil(totalLapis * increment);
    let totalGold = Math.ceil(gold * increment);
    let totalHeigh =Math.floor(steps * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeigh}`);

}
piramid(11, 1)