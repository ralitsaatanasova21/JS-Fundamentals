function solve(arr){
    let stops=arr.shift();
    arr.pop();

    for(let row of arr){
        row=row.split(':');
        let command=row[0];

        if(command=='Add Stop'){
            let index= +row[1];
            let str=row[2];
            if(index>=0 && index<stops.length){
                let first=stops.slice(0,index);
                let last=stops.slice(index);
                stops=first+str+last;
            }
            console.log(stops);

        }else if(command==='Remove Stop'){
            let startIndex= +row[1];
            let endIndex= +row[2];
            if(startIndex>=0 && startIndex<stops.length && endIndex>=0 && endIndex<stops.length){
                let first=stops.slice(0, startIndex);
                let last= stops.slice(endIndex+1);
                stops=first+last;
            }
            console.log(stops);

        }else if (command==='Switch'){
            let oldStr=row[1];
            let newStr=row[2];
            if(stops.includes(oldStr)){
                stops=stops.replace(oldStr,newStr);
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])