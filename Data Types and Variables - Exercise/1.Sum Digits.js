function sum(g) {
    g=g.toString();
    let sum = 0;
    for (let i = 0; i < g.length; i++) {

        sum += Number(g[i]);
    }
    console.log(sum);

}
sum(245678)