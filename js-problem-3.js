// Problem 1 :-
/*
Show the cheapest Prices phone from this objects of array;
*/
const Phones = [
    {Name: "Iphone" , Camera: 14 , Storage: "32GB" , Price: 90000 , Color: "Black"},
    {Name: "Samsung" , Camera: 27 , Storage: "64GB" , Price: 85000 , Color: "Silver"},
    {Name: "Nokia" , Camera: 45 , Storage: "32GB" , Price: 700000 , Color: "Black"},
    {Name: "Vivo" , Camera: 14 , Storage: "32GB" , Price: 65000 , Color: "White"},
    {Name: "Xawmi" , Camera: 14 , Storage: "32GB" , Price: 40000 , Color: "Dark Blue"},
    {Name: "Symphony" , Camera: 14 , Storage: "32GB" , Price: 55000 , Color: "Black"},
]
function cheapestPhone(phones){
    let cheapestPhone = phones[0];
    for(let i = 0; i < phones.length; i ++){
        if(phones[i].Price < cheapestPhone.Price){
            cheapestPhone = phones[i] ;
        }
    }
    return cheapestPhone ;
}
console.log(cheapestPhone(Phones));
// end //



// Problem 2 :-
/*
Show The total shopping cost from this objects of array;
*/
const shoppingCart = [
    {name : "shoe" , price: 3100, quantity: 2},
    {name : "shoe" , price: 1500, quantity: 5},
    {name : "shoe" , price: 2200, quantity: 4},
    {name : "shoe" , price: 600, quantity: 6},
];
function totalCost(products){
    let sum = 0 ;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        let totalProduct = product.price * product.quantity ;
        sum += totalProduct ;
    }
    return sum ;
}
console.log(totalCost(shoppingCart)) ;
// end //



// Problem 3 :-
/*
1. if ticket numbers is less than 100, per ticket price: 100 ;
1. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/tickets, rest tickets will be 90 taka;
1. if ticket numbers is more than 200, 
    First 100 ---> 100 ;
    101-200 ---> 90 ;
    200+ ----> 70 ;
*/
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        let totalPrice = ticketQuantity * first100Rate ;
        return totalPrice ;
    }else if (ticketQuantity <= 200){
        let first100Price = 100 * first100Rate ;
        let restTicketQuantity = ticketQuantity - 100 ;
        let restTicketPrice = restTicketQuantity * second100Rate  ;
        let totalPrice = first100Price + restTicketPrice ;
        return totalPrice ;
    }else {
        let first100Price = 100 * first100Rate ;
        let second100Price = 100 * second100Rate ;
        let restTicketQuantity = ticketQuantity - 200 ;
        let restTicketPrice = restTicketQuantity * restTicketRate ;
        let totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice ;
    }
}
console.log(ticketPrice(120));
// end //




// --------------- Stimulation Object ------------- //
const Profiles = {
    Foysal : {
        name: "Foyal Ahmed",
        age: 23,
        friends: ["hero", "alom", "robin", "manna" ,"kulsum" , "Khairun nahar"],
        country: "Bangladesh",
        relationship: true
    },
    Shamima : {
        name: "Shamima Hossain",
        age: 22,
        friends: ["sbina", "md.alom", "mr.robin", "shabnur" , "mr.manna" , "md.belal" , "sonia" , "md.jahid"],
        country: "Bangladesh",
        relationship: true
    },
    Shawon : {
        name: "Habibur Rohoman Shawon",
        age: 23,
        friends: ["Bobita", "mita", "Panna", "Miraz"],
        country: "Bangladesh",
        relationship: true
    },
};
// Problem 4 :-
/*
How many friends have in your fav Person profile? ;
*/
function fevProfile(name){
    let friends = Profiles[name].friends ;
    let cuntFriends = friends.length ;
    return cuntFriends ;
}
console.log(fevProfile("Shamima"));
// end //


// Problem 5 :-
/*
How many male friends have in your fav Person profile? ;
*/
function fevProfileBoys(name){
    let friends = Profiles[name].friends ;
    let maleFriends = [];
    for(let i = 0; i < friends.length; i++){
        let boys = friends[i].includes("md");
        let boys1 = friends[i].includes("mr");
        if(boys || boys1){
            maleFriends.push(friends[i]) ;
        }
    }
    
    let maleFriendsCount = maleFriends.length ;
    console.log(maleFriends);
    return maleFriendsCount ;
}
console.log(fevProfileBoys("Shamima"));
// end //


// Problem 6 :-
/*
Which is the largest Name of your friendList? ;
*/
function largestName (name){
    let friends = Profiles[name].friends;
    let largestNameLength = 0;
    let largestName = "";
    for(let i = 0; i < friends.length; i++){
        let friendName = friends[i].length;
        if(friendName > largestNameLength){
            largestNameLength = friendName;
            largestName = friends[i];
        }
    }
    return largestName ;
}
console.log(largestName ("Foysal"));
// -------------------- End ------------------ //



// Problem 7 :-
/*
1. if ticket numbers is less than 100, per ticket price: 100 ;
1. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/tickets, rest tickets will be 90 taka;
1. if ticket numbers is more than 200, 
    First 100 ---> 100 ;
    101-200 ---> 90 ;
    200+ ----> 70 ;
*/
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        let totalPrice = ticketQuantity * first100Rate ;
        return totalPrice ;
    }else if (ticketQuantity <= 200){
        let first100Price = 100 * first100Rate ;
        let restTicketQuantity = ticketQuantity - 100 ;
        let restTicketPrice = restTicketQuantity * second100Rate  ;
        let totalPrice = first100Price + restTicketPrice ;
        return totalPrice ;
    }else {
        let first100Price = 100 * first100Rate ;
        let second100Price = 100 * second100Rate ;
        let restTicketQuantity = ticketQuantity - 200 ;
        let restTicketPrice = restTicketQuantity * restTicketRate ;
        let totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice ;
    }
}
console.log(ticketPrice(120));
// end //



// Problem 8 :-
/*
What will be the area fo the triangle according to Values of the three sides?

Triangle Area formula:-
Area, A = {s(s -a)(s-b)(s - c)}^-2
Semi Perimeter, S = (a+b+c) / 2 ;
*/
function areaTriangle( a , b , c){
    let s = (a + b + c) / 2 ;
    let n = (s * (s -a) * (s-b) * (s - c)) ;
    let Area = Math.sqrt(n);
    return Area ;
}
console.log(areaTriangle( 3 , 6 , 7)) ;



// Problem 9 :-
/*
Make a Fibonacci(ধারা) number array upto 25 elements ;
*/
function fibonacci(number){
    const fibo = [0 , 1];
    for(let i = 2 ; i <= number; i ++){
        fibo[i] = fibo[i - 1] + fibo [i - 2] ;
    }
    return fibo ;
}
console.log(fibonacci(25));
// end //




// Problem 10 :-
/*
make sure a factorial number(n!) from a number(n);
*/
function factorial(number){
    let factorialValue = 1;
    for(let i = 0;  i < number; number --){
        factorialValue = factorialValue * number;
    }
    return factorialValue;
}
console.log(factorial(5));
// end //




// Problem 11 :-
/*
Check the number is prime number or ont ?
Note :- // Prime number only divided by 1 and itself [n % 1 = 0 and n % n = 0];
*/
function PrimeNumberCheck(number){

    // check if number equal to 1 ;
    if ( number === 1){
        return "1 is neither prime nor compoTickete number";
    }
    // check if number is greater than 1 ;
    else if (number > 1){

        let isPrime = true ;
        // loop for check if number is divided by except 1 and itself ;
        for(let i = 2; i < number ; i ++){
            if(number % i == 0){
                isPrime = false;
                break ;
            }
        }
        if(isPrime){
            return number +" "+ "Is a Prime Number";
        }else{
            return number +" "+ "Is Not a Prime Number";
        }

    }
    // check if number is smaller than 1;
    else{
        return number +" "+ "Is Not a Prime Number";
    }

}
console.log(PrimeNumberCheck(3));
// end //

// making prime array according to limited number;
function PrimeNumberArray(numbersLimit){

    const Prime_Numbers = [];

    for(let number = 0; number <= numbersLimit; number ++){
        let isPrime = true ;
        if (number === 0 || number === 1){
            isPrime = false;
        }
        else if (number > 1){
            for(let i = 2; i < number ; i ++){
                if(number % i == 0){
                    isPrime = false;
                    break ;
                }
            }
            if(isPrime){
                Prime_Numbers.push(number);
            }
        }
    }
    return Prime_Numbers ;

}
console.log(PrimeNumberArray(100));
// end //



// Problem 12 :-
/*
A large number of people will go on a picnic. The number of buses will depend on the number of people. Suppose we have buses and micros. 
Each bus has a capacity of 50 people 
and each microbus has a capacity of 11 people,
and each public bus ticket costs Tk 250. 
If there are less than 11 people in the microbus, the microbus cannot go. Now you have to write a function called "picnicVehiclesDetails" which will take a number (how many passengers) as a parameter. 
It will return you the total amount of public bus fare and how many bus and micro bus their needed.
*/
function picnicVehiclesDetails(persons){
    let publicBusTicketPrice = 250 ;
    let busCap = 50 ;
    let microBusCap = 11 ;

    let x = persons / busCap ;      // buses quantity ; 
    let xEx = persons % busCap;     // Extra passengers who can't have space in the bus;
    let y = xEx / microBusCap ;     // micro buses quantity ;
    let yEx = xEx % microBusCap ;   // Extra passengers who can't have space in the micro bus;
    
    // removed extra persons from bus and microBuses ;
    let buses = Math.floor(x);
    let MicroBuses = Math.floor(y);

    if( persons < busCap ){
        let y = persons / microBusCap ;  // micro buses quantity ; 
        let yEx = persons % microBusCap; // Extra passengers who can't have space in the micro bus;
        if ( persons < microBusCap){
            let publicCost = persons * publicBusTicketPrice ;
            return  persons + " people have to go by public bus and their cost wil be " + publicCost +" Taka." ;

        }else if (Number.isInteger(y)){
            return "Need Only " + MicroBuses +" Micro Buses." ;

        }else {
            let publicCost = yEx * publicBusTicketPrice ;
            return "Need Only " + MicroBuses + " Micro Buses and "+ yEx +" people have to go by public bus and their cost wil be " + publicCost +" Taka." ;
        }

    }else if(Number.isInteger(x)){
        return "Need Only "+ buses +" Buses " ;

    }else {
        if ( xEx < microBusCap){
            let publicCost = xEx * publicBusTicketPrice ;
            return "Need Only "+ buses +" Buses and " + xEx + " people have to go by public bus and their cost wil be " + publicCost +" Taka." ;

        }else if (Number.isInteger(y)){
            return "Need Only " + buses + " Buses and "+ MicroBuses +" Micro Buses." ;

        }else {
            let publicCost = yEx * publicBusTicketPrice ;
            return "Need Only " + buses + " Buses, " + MicroBuses +" Micro Buses and "+ yEx +" people have to go by public bus and their cost wil be " + publicCost +" Taka." ;
        }
    }

}
console.log(picnicVehiclesDetails(10));
// end //