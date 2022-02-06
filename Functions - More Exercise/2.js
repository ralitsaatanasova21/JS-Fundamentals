function numberModification(num) {
    let sums=0;
    let index=0;
    let sumAverage=0;
    let allNumSum=0;
  num = num.toString();
  for(let i=0; i<=num.length-1; i++){
      allNumSum+=Number(num[i]);
  }
  console.log(allNumSum);

  if(allNumSum>5){
    console.log(num);
  }else{
      while(sumAverage<=5){
          let n = "9";
          let length=num.length + 1;
          allNumSum += Number(n);
          sumAverage =Number(allNumSum/length);
        }
        console.log(num);
  }
 
}
numberModification(101);
// numberModification(5835);
