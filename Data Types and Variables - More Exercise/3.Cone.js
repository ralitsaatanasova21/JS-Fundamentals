function cone(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let liceOsnova = Number(Math.PI * Math.pow(radius, 2));
    let malkoS = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let B = Math.PI * radius * malkoS;
    let S1 = liceOsnova + B;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${S1.toFixed(4)}`);

}
cone(3,

    5)