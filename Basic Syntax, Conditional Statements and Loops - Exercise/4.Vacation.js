function vacation(people, type, day) {
    let price = 0;
    let total = 0;

    if (day === 'Friday') {
        switch (type) {
            case 'Students':
                price = 8.45;
                total = people * price;
                if (people >= 30) {
                    total *= 0.85;
                }
                break;
            case 'Business':
                price = 10.90;
                total = people * price;
                if (people >= 100) {
                    total = (people - 10) * price;
                }
                break;
            case 'Regular':
                price = 15;
                total = people * price;
                if (people >= 10 && people <= 20) {
                    total *= 0.95;
                }
                break;
        }
    } else if (day === 'Saturday') {
        switch (type) {
            case 'Students':
                price = 9.80;
                total = people * price;
                if (people >= 30) {
                    total *= 0.85;
                }
                break;
            case 'Business':
                price = 15.60;
                total = people * price;
                if (people >= 100) {
                    total = (people - 10) * price;
                }
                break;
            case 'Regular':
                price = 20;
                total = people * price;
                if (people >= 10 && people <= 20) {
                    total *= 0.95;
                }
                break;
        }
    } else if (day === 'Sunday') {
        switch (type) {
            case 'Students':
                price = 10.46;
                total = people * price;
                if (people >= 30) {
                    total *= 0.85;
                }
                break;
            case 'Business':
                price = 16;
                total = people * price;
                if (people >= 100) {
                    total = (people - 10) * price;
                }
                break;
            case 'Regular':
                price = 22.50;
                total = people * price;
                if (people >= 10 && people <= 20) {
                    total *= 0.95;
                }
                break;
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);

}
vacation(30, 

    "Students", 
    
    "Sunday" )