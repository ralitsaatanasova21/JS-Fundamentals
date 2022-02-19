function solve(arr) {
  let num = +arr.shift();
  let reg =
    /^(?<first>[!-~]+)[>](?<nums>[0-9]{3})[|](?<third>[a-z]{3})[|](?<four>[A-Z]{3})[|](?<end>[!-;|=|?-~]{3})[<](?<last>\1)$/g;

  while (num > 0) {
    let row = arr.shift();
    let match = reg.exec(row);
    if (match) {
      let first = match.groups.nums;
      let second = match.groups.third;
      let third = match.groups.four;
      let end = match.groups.end;

      console.log(`Password: ${first + second + third+end}`);
    } else {
      console.log("Try another password!");
    }
    num--;
  }
}
solve([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);
