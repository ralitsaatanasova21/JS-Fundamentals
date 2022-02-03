function solve(arr) {
  let games = arr[0].split(" ");
  let index = 1;

  while (arr[index] != "Play!") {
    let str = arr[index].split(" ");
    if (str[0] == "Install" && !games.includes(str[1])) {
      games.push(str[1]);
    } else if (str[0] == "Uninstall" && games.includes(str[1])) {
      let gameIndex = games.indexOf(str[1]);
      games.splice(gameIndex, 1);
    } else if (str[0] == "Update" && games.includes(str[1])) {
      let gameIndex = games.indexOf(str[1]);
      games.splice(gameIndex, 1);
      games.push(str[1]);
    } else if (str[0] == "Expansion") {
      let expansion = str[1].split("-");
      let game = expansion[0];

      if (games.includes(game)) {
        let expandedGame = expansion.join(":");
        let newIndex = games.indexOf(game);
        games.splice(newIndex + 1, 0, expandedGame);
      }
    }
    index++;
  }
  console.log(games.join(" "));
}
solve([
  "CS WoW Diablo",

  "Install LoL",

  "Uninstall WoW",

  "Update Diablo",

  "Expansion CS-Go",

  "Play!",
]);
