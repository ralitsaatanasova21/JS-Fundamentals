function solve(arr) {
    let text=arr.shift();
    arr.pop();

    for(let row of arr){
        row=row.split(' ');
        let command=row[0];

        if(command==='Change'){
            let char=row[1];
            let newChar=row[2];
            while(text.includes(char)){
                text=text.replace(char,newChar);
            }
            console.log(text);
        }else if(command==='Includes'){
            let str=row[1];
            if(text.includes(str)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(command==='End'){
            let str=row[1];
            if(text.endsWith(str)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(command==='Uppercase'){
            text=text.toUpperCase();
            console.log(text);
        }else if(command==='FindIndex'){
            let char=row[1];
            let index=text.indexOf(char);
            console.log(index);
        }else if(command==='Cut'){
            let start= +row[1];
            let count= +row[2];
            let mid=text.slice(start,start+count);

            text=mid;
            console.log(text);
        }
    }

    
}
solve(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])

