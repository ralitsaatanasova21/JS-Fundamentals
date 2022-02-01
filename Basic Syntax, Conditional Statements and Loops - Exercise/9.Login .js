function user(g){
    let userName=g[0];
    let reversed=userName.split("").reverse().join("");
    for(let i=1; i<=g.length; i++){
        if(i===4 && g[i]!==reversed){
            console.log(`User ${userName} blocked!`);
            break;
        }
        if(g[i]===reversed){
            console.log(`User ${userName} logged in.`);
            break;
        }else{
            console.log(`Incorrect password. Try again.`);
        }
    }


}
user(['Acer','login','go','let me in','recA'] )