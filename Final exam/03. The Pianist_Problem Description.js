function solve(arr) {
  let number = Number(arr.shift());
  let colection = arr.slice(0, number);
  let newArr = arr.slice(number);
  let obj = {};
  newArr.pop();

  for (let row of colection) {
    row = row.split("|");
    let piese = row[0];
    let composer = row[1];
    let key = row[2];

    obj[piese] = {
      composer: composer,
      key: key,
    };
  }

  for (let row of newArr) {
    row = row.split("|");
    let command = row[0];
    let newPies = row[1];

    if (command == "Add") {
      let newComposer = row[2];
      let newKey = row[3];

      if (!obj[newPies]) {
        obj[newPies] = {
          composer: newComposer,
          key: newKey,
        };
        console.log(
          `${newPies} by ${newComposer} in ${newKey} added to the collection!`
        );
      } else {
        console.log(`${newPies} is already in the collection!`);
      }
    } else if (command == "Remove") {
      if (obj[newPies]) {
        delete obj[newPies];
        console.log(`Successfully removed ${newPies}!`);
      } else {
        console.log(
          `Invalid operation! ${newPies} does not exist in the collection.`
        );
      }
    } else if (command == "ChangeKey") {
      let newKey = row[2];

      if (obj[newPies]) {
        obj[newPies].key = newKey;
        console.log(`Changed the key of ${newPies} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${newPies} does not exist in the collection.`
        );
      }
    }
  }
  obj = Object.entries(obj);

  obj.sort((nameA, nameB) => {
    let townAName = nameA[0];
    let townBName = nameB[0];
    let townAProp = nameA[1];
    let townBProp = nameB[1];

    if(townAName!==townBName){
        return townAName.localeCompare(townBName);
    }
    if (townAProp.composer !== townBProp.composer) {
      return townBProp.composer.localeCompare(townAProp.composer);
    } 
  });

  for (let kvp of obj) {
    let name = kvp[0];
    let properties = kvp[1];
    console.log(
      `${name} -> Composer: ${properties.composer}, Key: ${properties.key}`
    );
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
