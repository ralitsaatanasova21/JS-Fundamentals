function numbers(a) {
    a = a.toString();
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i]);
        
    }
    let sumStr=sum.toString();
    let hasNine=false;
    for(let i=0; i<sumStr.length; i++){
        if(sumStr[i]=='9'){
            hasNine=true;
            break;
        }
    }
    console.log(`${a} Amazing? ${hasNine ? 'True' : 'False'}`);


}
numbers(1233)