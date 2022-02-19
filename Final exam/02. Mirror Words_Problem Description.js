function solve(arr) {
  let text = arr[0];
  let regex = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let matches = [...text.matchAll(regex)];
  let words = [];

  for (const row of matches) {
    let first = row[2];
    let sec = row[3];
    let reverseWord = sec.split("").reverse().join("");
    if (first === reverseWord) {
      words.push(first + " <=> " + sec);
    }
  }

  if (matches.length === 0) {
    console.log("No word pairs found!");
  }else{
      console.log(`${matches.length} word pairs found!`);
  }
  if (words.length == 0) {
    console.log(`No mirror words!`);
  } else {
      console.log("The mirror words are:");
      console.log(words.join(", "));
  }
}
solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
