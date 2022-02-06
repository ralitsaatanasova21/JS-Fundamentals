function result(arr) {
  let isPalindrome = (num) => {

      let startnum = num;
      let reversedNum = Number(num.toString().split("").reversed().join(""));
    if (startnum === reversedNum) {
      return "true";
    } else {
      return "false";
    }
  };

  for (let i = 0; i < arr.length; i++) {
    let currnum = arr[i];
    console.log(isPalindrome(currnum));
  }
}
result([123, 323, 421, 121]);
