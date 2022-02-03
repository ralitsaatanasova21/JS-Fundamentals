function solve(input) {
 
  let conMess = input.shift();
 
 
  while (input[0] !== 'Reveal') {
 
    let cur = input.shift().split(':|:');
 
    let command = cur[0];
 
    let subsOrIndex = cur[1];
 
    let replacement = cur[2];
 
    let before = '';
 
    let after = '';
 
 
    if (command === 'InsertSpace') {
 
      before = conMess.substring(0, subsOrIndex);
 
      after = conMess.substring(subsOrIndex);
 
      before += ' ';
 
      conMess = before.concat(after);
 
      console.log(conMess);
 
    } else if (command === 'Reverse') {
 
      if (conMess.includes(subsOrIndex)) {
 
        let revStr = '';
 
        for (let i = subsOrIndex.length - 1; i >= 0; i--) {
 
          revStr += subsOrIndex[i];
 
        }
 
        conMess = conMess.replace(subsOrIndex, revStr);
 
        console.log(conMess);
 
      } else {
 
        console.log('error');
 
      }
 
    } else if (command === 'ChangeAll') {
 
      conMess.split('').forEach(el => el === subsOrIndex ? conMess = conMess.replace(el, replacement) : false);
 
      console.log(conMess);
 
    }
 
 
  }
 
 
 
  console.log(`You have a new text message: ${conMess}`);
 
}
 
 
solve(
 
  [
 
    'heVVodar!gniV',
 
    'ChangeAll:|:V:|:l',
 
    'Reverse:|:!gnil',
 
    'InsertSpace:|:5',
 
    'Reveal'
 
  ]);

