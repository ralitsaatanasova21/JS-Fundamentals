function solve(arr) {
  let waitingPeople = Number(arr[0]);
  let wagons = arr.shift().split(' ');
  let wagonSpaceCount = 0;
  
  
  for(let i=0; i<wagons.length; i++){
    let currWagon=Number(wagons[i]);

    if(waitingPeople>=4){
      if(currWagon!=0){
        waitingPeople-=4-currWagon;
      }



    }

  }
  
}
solve(["15", "0 0 0 0 0"]);
