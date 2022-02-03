function solve(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'add') {
      newArr.push(i+1);
    }else{
        newArr.pop();
    }
  }
  if(newArr==0){
      console.log(`Empty`);
  }
  console.log(newArr.join(' '));
}
solve(['add', 'add', 'add', 'add'] );
// solve(['add', 'add', 'remove', 'add', 'add'])
