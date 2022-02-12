function solve(arr) {
  let phones = arr.shift().split(", ");
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split(" - ");
    let command = row[0];
    let phone = row[1];

    switch (command) {
      case "Add":
        if (!phones.includes(phone)) {
          phones.push(phone);
        }
        break;

      case "Remove":
        if (phones.includes(phone)) {
          let index = phones.indexOf(phone);
          phones.splice(index, 1);
        }
        break;

      case "Bonus phone":
        let red=phone.split(':');
        let old=red[0];
        let newPhone=red[1];
        if (phones.includes(old)) {
          let index = phones.indexOf(old);
          phones.splice(index+1, 0, newPhone);
        }
        break;

      case "Last":
        if (phones.includes(phone)) {
          let index = phones.indexOf(phone);
          phones.splice(index, 1);
          phones.push(phone);
        }
        break;
    }
  }
  console.log(phones.join(', '));
}
solve(["SamsungA50, MotorolaG5, HuaweiP10", 

"Last - SamsungA50", 

"Add - MotorolaG5", 

"End"]) 
