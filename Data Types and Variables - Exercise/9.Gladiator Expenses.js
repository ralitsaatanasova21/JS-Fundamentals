function gladiator(lostFight, priceHelmet, priceSword, priceShield, priceArmor) {
    let price=0;
    
    for (let currentFight = 1; currentFight <= lostFight; currentFight++) {
        if (currentFight % 2 == 0) {
            price+=priceHelmet;
        }
        if (currentFight % 3 == 0) {
            price+=priceSword;
        }
        if (currentFight % 6==0) {
            price+=priceShield;
        }
        if(currentFight % 12==0){
            price+=priceArmor;
        }

    }
    
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);

}
gladiator(23, 

    12.50, 
    
    21.50, 
    
    40, 
    
    200  )