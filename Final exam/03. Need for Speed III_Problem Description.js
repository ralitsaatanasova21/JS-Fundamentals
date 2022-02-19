function solve(arr) {
  let n = +arr.shift();
  let colection = arr.slice(0, n);
  let obj = {};
  let newArr = arr.slice(n);
  newArr.pop();

  for (let row of colection) {
    row = row.split("|");
    let car = row[0];
    let mileage = +row[1];
    let fuel = +row[2];

    obj[car] = {
      mileage: mileage,
      fuel: fuel,
    };
  }

  for (let row of newArr) {
    row = row.split(" : ");
    let command = row[0];
    let car = row[1];

    if (command === "Drive") {
      let distance = +row[2];
      let fuel = +row[3];

      if (fuel <= obj[car].fuel) {
        obj[car].fuel -= fuel;
        obj[car].mileage += distance;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      } else {
        console.log("Not enough fuel to make that ride");
      }
      if (obj[car].mileage > 100000) {
        console.log(`Time to sell the ${car}!`);
        delete obj[car];
      }
    } else if (command === "Refuel") {
      let fuel = +row[2];

      if (fuel + obj[car].fuel <= 75) {
        console.log(`${car} refueled with ${fuel} liters`);
        obj[car].fuel += fuel;
      } else {
        console.log(`${car} refueled with ${75-obj[car].fuel} liters`);
        obj[car].fuel = 75;
      }
    } else if (command === "Revert") {
      let km = +row[2];
      if (obj[car].mileage - km > 10000) {
        console.log(`${car} mileage decreased by ${km} kilometers`);
        obj[car].mileage -= km;
      } else {
        obj[car].mileage = 10000;
      }
    }
  }
  obj = Object.entries(obj);

  obj.sort((nameA, nameB) => {
    let carAName = nameA[0];
    let carBName = nameB[0];
    let carAProp = nameA[1];
    let carBProp = nameB[1];

    if (carAProp.mileage !== carBProp.mileage) {
      return carBProp.mileage - carAProp.mileage;
    }
     else {
      return carAName.localeCompare(carBName);
    }
  });
  for (let kvp of obj) {
    let name = kvp[0];
    let properties = kvp[1];
    console.log(
      `${name} -> Mileage: ${properties.mileage} kms, Fuel in the tank: ${properties.fuel} lt.`
    );
  }
}
// solve([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )