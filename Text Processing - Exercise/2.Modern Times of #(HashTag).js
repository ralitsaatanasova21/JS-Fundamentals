function solve(text) {
  let special = [];
  text = text.split(" ");

  for (let word of text) {
    if (word[0] === "#" && word.length > 1) {
      special.push(word.substring(1));
    }
  }

  let result = [];
  for (let el of special) {
    el = el.split(" ");
    let isTrue = true;

    for (let i = 0; i < el.length; i++) {
      let curr = el[i].charCodeAt(0);
      if ((curr < 97 || curr > 122) && (curr < 65 || curr > 90)) {
        isTrue = false;
      }
    }
    if(isTrue){
      result.push(el);
    }
  }
  console.log(result.join('\n'));
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
