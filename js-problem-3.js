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



// Problem 1 :-
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



// Problem 1 :-
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



// Problem 1 :-
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
// Problem 1 :-
/*
How many friends have in your fav Person profile? ;
*/
function fevProfile(name){
    let friends = Profiles[name].friends ;
    let cuntFriends = friends.length ;
    return cuntFriends ;
}
console.log(fevProfile("Shamima"));
// Problem 1 :-
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
// Problem 1 :-
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
        }``
    }
    return largestName ;
}
console.log(largestName ("Foysal"));
// -------------------- End ------------------ //


