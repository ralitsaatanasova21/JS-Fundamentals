function solve(arr) {
  let book = {};
  let count=0;
  for (let word of arr) {
      if (!book.hasOwnProperty(word)) {
        count=1;
        book[word]=count;
    }else{
        let curr=book[word];
        book[word]=curr++;
    }
  }
  console.log(book);
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
