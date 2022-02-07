function converter(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };
  let str = JSON.stringify(obj);
  console.log(str);
}
converter("George", "Jones", "Brown");
