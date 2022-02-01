function tri(arg1) {
    let n = Number(arg1)
    
    for (let i = 1; i <= n; i++) {
        let currLine='';
        for (let j =0; j < i; j++) {
           currLine+=`${i} `;
            
        }
        console.log(currLine);
    }
    for(let i=n-1; i>=0; i--){
        let currLine='';
        for(let j=i; j>0; j--){
            currLine+=`${i} `;

        }
        console.log(currLine);
    }
}
tri(6)