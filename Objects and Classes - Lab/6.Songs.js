function creator(arr) {
  class Songs {
    constructor(type, name, time) {
      (this.type = type),
        (this.name = name),
        (this.time = time),
        (this.print = () => {
          console.log(`${this.name}`);
        });
    }
  }
  let countSongs = arr.shift();
  let playlist = arr.pop();
  let songs = [];

  for (let i = 0; i < countSongs; i++) {
    let [type, name, time] = arr[i].split("_");
    let song = new Songs(type, name, time);
    songs.push(song);
  }
  if (playlist === "all") {
    songs.forEach((s) => s.print());
  } else {
    songs.filter((s) => s.type === playlist).forEach((s) => s.print());
  }
}
creator([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);
