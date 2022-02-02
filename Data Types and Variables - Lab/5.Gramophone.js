function gramophone(band, album, song){
    let duration=((album.length * band.length) * song.length) / 2;
    let oneDuration=2.5;
    let sum=duration/oneDuration;
    console.log(`The plate was rotated ${Math.ceil(sum)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')