function right(word, letter, newWord) {
    let duma = '';

    for(let i=0; i<word.length;i++){
        if (word[i]=='_'){
            duma+=letter;
        }else{
            duma+=word[i];
        }
    }

    if(duma===newWord){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
}
right('Str_ng', 'I', 'Strong')