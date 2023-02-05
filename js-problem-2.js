// Problem 1 :-
/*
Make a uppercase string from lowercase;
*/
function make_Uppercase(lowerCase){

    let Uppercase = lowerCase.toUpperCase()
    return Uppercase;

}
console.log(make_Uppercase("It was lowercase string."));
// end //


// Problem 2 :-
function foo(){
    console.log(bar());
    return "foo";
}
function bar(){
    return "bar" ;
}
let output = foo();
console.log(output);
// end //


// Problem 3 :-
/*
Make a average number of any random numbers;
*/
function make_avg(int1, int2, int3){
        let ints = int1 + int2 + int3;
        let avg = ints / 3;
    return +avg.toFixed(2);
}
console.log("It's the average number", make_avg(50 , 60 , 75));
// end //


// Problem 4 :-
/*
Make a average number of an array numbers;
*/
function make_array_avg(integers){
    
    let sum = 0;
    for(let i = 0; i < integers.length; i++){
        sum += integers[i];
    }
    let avg = sum / integers.length;

    return +avg.toFixed(2);
}
const intArray = [50 , 60 , 75];
console.log("It's the array's average number", make_array_avg(intArray));
// end //


// Problem 5 :-
/*
Make sure the number is odd or even number with function perameter;
*/
function odd_even(num){
    let reminder = num % 2;
    if(reminder == 0){
        console.log (num, "Is a even number")
    }else{
        console.log (num, "Is a odd number")
    }
}
odd_even(5);
// end //


// Problem 6 :-
/*
Make sure the warning with traffic light;
*/
function lamp_light(light){
    switch(light){
        case "red" :
            console.log("you stop to cross the road");
            break;
        case "yellow" :
            console.log("if you cross the road, It might be danger");
            break;
        case "green" : 
            console.log("You can cross the road");
            break;
    }
}
lamp_light("red"); 
// end //


// Problem 7 :-
/*
Make a object and defied the element of array from this object;
*/
const pizza = {
    toppings : ["cheese", "sauce", "pepperoni"],
    crust: "deep dish",
    service: 2
};
let indexed = pizza.toppings.indexOf("pepperoni");
let defined = pizza.toppings[indexed];
console.log(defined);
// end //


// Problem 8 :-
/*
find out the largest number of array;
*/
function largestNum(){

    const numbers = [1, 2, 4, 3, 4, 7, 7, 9, 8, 6, 10, 9];
    let largestNumber = 0;
    for (let i = 0; i < numbers.length; i++){

        if(largestNumber < numbers[i]){
            largestNumber = numbers[i];
        }
    }
    console.log(largestNumber);
    
}
largestNum()
// end //


// Problem 9 :-
/*
make a unique number's array from random array;
*/
function unique_number_loop(){
    // way one;
    const numbers = [1, 2, 4, 3, 4, 7, 7, 9, 8, 6, 10, 9];
    let update_array = [];
    for (let i = 0; i < numbers.length; i++){
        let primaryValue = numbers[i]
        if(update_array.indexOf(primaryValue) == -1){
            update_array.push(numbers[i]);
        }
    }
    console.log(update_array);
    
}
unique_number_loop()

function unique_number(){
    // way tow;
    const chars = ['A', 'B', 'A', 'C', 'B'];
    let update_array = [];
    chars.forEach(function(value){
        if (!update_array.includes(value)) {
            update_array.push(value);
        }
    });

    console.log(update_array);
    
}
unique_number()
// end //


// Problem 10 :-
/*
make a scending number's array from random array;
*/
function scending_loop(){
    // way one;
    const number = [3, 2, 4, 3, 4, 7, 7, 9, 8, 6, 10, 9];
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < i; j++) {
            if (number[i] < number[j]) {
                let x = number[i];
                number[i] = number[j];
                number[j] = x;
            }
        }
    }
    console.log(number);
}
scending_loop()

function scending(){
    // way tow;
    const number = [1, 2, 4, 3, 4, 7, 7, 9, 8, 6, 10, 9];
    number.sort(function(a, b){
        return a -b
    });
    console.log(number);
}
scending();
// end //


// Problem 11 :-
/*
make new array one by one from this array until find any negative number;
*/
function newArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            break ;
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr ;
}
console.log(newArray([1, 3, 4, 6, 2, 6, 3, -9, -1, 3, -4]));
// end //


// Problem 12 :-
/*
make a leap year array from random year array;
*/
function leap_year(){
    const year = [2023, 2024, 2025, 2028, 2030];
    const leap_years = [];
    for(let i = 0; i < year.length; i++){
        let reminder = year[i] % 4;
        if(reminder === 0){
            leap_years.push(year[i]);
        }
    }
    return leap_years
}
console.log(leap_year());
// end //


// Problem 12 :-
/*
Write a program to make sure is their age distance more 10 year ?;
*/
function ageDistance(person1, person2){
    let x = person1 - person2;
    let ageDistance = Math.abs(x);
    if(ageDistance > 10){
        return "Yas their age distance more than ten and the distance is " + ageDistance ;
    }else{
        return "NO their age distance is not more than ten and the distance is " + ageDistance ;
    }
}
console.log(ageDistance(61, 53));

// Problem 14 :-
function Namta(number){
    let result = 1;
    for(let i = 1;  i <= 10; i++){
        result = number * i;
        console.log(number, "X", i, "=", result);
    }
}
Namta(13);
// end //