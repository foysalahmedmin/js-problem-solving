// Problem 1 :- 
/*
The function will take a positive number as input, and will return the operational result;
*/
function mindGame(number){
    // checked the input is correct or not ;
    if(typeof number != "number" || number < 0){
        return "Your input have to be number and also positive number;"
    }
    // result operation ;
    let result = (((number * 3)+10)/2)-5 ;
        return result ;
}



// Problem 2 :-
/*
The function will take a string as input, then it will count whether the characters in the string are odd or even;
*/
function evenOdd(str){
    // checked the input is string or not ;
    if(typeof str != "string"){
        return "Your input have to be string;"
    }
    // reminder;
    let characterRemainder = str.length % 2 ;
    if(characterRemainder === 0){
        // if reminder is equal to 0, it will return even;
        return "even"
    }else{
        // if reminder is not equal to 0, it will return odd;
        return "odd"
    }
}



// problem 3 :-
/*
The function will take a number as input, then it will return some operational result  conditionally;
*/
function isLGSeven(number){
    // checked the inputs, number or not ;
    if(typeof number != "number"){
        return "Your input have to be number;"
    }
    // distance operation ;
    let distance = number - 7 ;

    if (distance < 7){
        // if distance is more than 7, it will return only distance;
        return distance ;
    }else{
        // if distance is not more than 7, it they will return double value of the input;
        return number * 2 ;
    }
}



// problem 4 :-
/*
The function will take a array as input, then it will return negative numbers from the array as bad data ;
*/
function findingBadData(arr){
    // check the input is array or no;
    if(!Array.isArray(arr)){
        return "Your input have to be array;"
    }
    // counting bad data;
    let badNumber = 0 ;
    for(let i = 0; i < arr.length; i ++){

        if(arr[i] < 0){
            // if the element is negative it will count this element as a bad data;
            badNumber ++ ;
        }

    }
    return badNumber ;
}



// problem 5 :-
/*
The function will take three numbers as input, then it will return some operational result conditionally;
*/
function gemsToDiamond(gems1, gems2, gems3){

    // checked the inputs, correct or not ;
    if(gems1 == undefined || gems2 == undefined || gems3 == undefined){
        return "Your inputs is not correct, Something is missing;"
    }else if (typeof gems1 != "number" || typeof gems2 != "number" || typeof gems3 != "number"){
        return "Your inputs have to be number"
    }
    // Individual gems power ;
    const gems1_paw = 21 ;
    const gems2_paw = 32 ;
    const gems3_paw = 43 ;

    // Individual diamond quantity ;
    const gems1_Diamonds = gems1_paw * gems1 ;
    const gems2_Diamonds = gems2_paw * gems2 ;
    const gems3_Diamonds = gems3_paw * gems3 ;

    // diamond limit to subtraction;
    const diamondsLimit = 1000 * 2 ;
    
    // total diamonds ;
    let total_Diamonds = gems1_Diamonds + gems2_Diamonds + gems3_Diamonds;

    // check limit conditions for subtraction operations;
    if(total_Diamonds > diamondsLimit){
        total_Diamonds -= 2000 ;
    }
    return total_Diamonds ;
}
