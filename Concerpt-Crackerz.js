

// Problem 1 :-
/*
Tow string add in one line ;
*/
function stringConcat(str1, str2){
    let oneLine = str1 + " " + str2 ;
    return oneLine ;
}
console.log(stringConcat ("I am Want to be", "an awesome web developer"));
// end //



// Problem 2 :-
/*
Find similar string word of the string. And return how many have there ;
*/
function countZeros ( binary_num ) {
    const myArry = binary_num.match(/0/g);
    return myArry.length;
}
console.log(countZeros("10101"));
// end //



// Problem 3 :-
/*
Find the area of a rectangle ;
*/
function findArea( length, width ) {
    let area = length * width ;
    return area ;
}
console.log(findArea(10, 5));
// end //



// Problem 4 :-
/*
Convert temperature "Fahrenheit to Celsius". The output must be in a number format.;
*/
function temperatureConverter(valNum) {
    let CelsiusCon = (valNum - 32) / 1.8 ;
    let Celsius = +CelsiusCon.toFixed(2);
    return Celsius ;
}
console.log(temperatureConverter(103));
// end //



// Problem 4 :-
/*
Convert temperature "Fahrenheit to Celsius". The output must be in a number format.;
*/
// -----Way One----- //
const reverseMaker = (word)=> {
    let reversString = "";
    for (let i = word.length - 1; i >= 0; i--){
        reversString += word[i];
    }
    return reversString;
};
console.log(reverseMaker("hello"));
// -----Way Tow----- //
const reverseMakerTow = (word)=> {
    let reversString = word.split("").reverse().join("");
    return reversString;
};
console.log(reverseMakerTow("hello"));
// end //



// Problem 5 :-
/*
find the tallest height from friend heights array;
*/
function tallestFriend( height ){
    let tallest = Math.max(...height);
    return tallest ;
}
console.log(tallestFriend ( [157,  134,  188] )) ;
// end //



// Problem 6 :-
/*
Find the second largest number of array;
*/
function secondLargest ( numbers ) {
    let sortRevers = numbers.sort(sortFunction);
    function sortFunction(a, b){
        return b - a ;
    }
    let secLrgNum = sortRevers[1];
    return secLrgNum ;
}
console.log(secondLargest ( [10,33,5,99,6] ));
// end //



// Problem 7 :-
/*
Find the leap year of years array;
*/
function findLeapYear(arrOfYears){
        const leap_years = [];
        for(let i = 0; i < arrOfYears.length; i++){
            let reminder = arrOfYears[i] % 4;
            if(reminder === 0){
                leap_years.push(arrOfYears[i]);
            }
        }
        return leap_years ;
}
console.log(findLeapYear([2023,2024,2025,2028,2030]));
// end //



// Problem 8 :-
/*
return the sum of the odd numbers of the array;
*/
function findOddSum(arrOfNumbers){
    let sum = 0;
    for(let i = 0; i < arrOfNumbers.length; i ++){
        let reminder = arrOfNumbers[i] % 2 ;
        if(reminder !== 0){
            sum += arrOfNumbers[i] ;
        }
    }
    return sum ;
}
console.log(findOddSum([5, 7, 8, 10, 45, 30]));
// end //



// Problem 9 :-
/*
Make sure the letter is "vowel" or "consonant";
*/
const solution = (letter)=> {
    let vowel = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < vowel.length; i ++ ){
        if(letter == vowel[i]){
            return "VOWEL" ;
        }else{
            return "CONSONANT" ;
        }
    }
};
console.log(solution("k"));
// end //



// Problem 10 :-
/*
What is Jerry’s final score?;
*/
function finalScore ( scores ) {
    let totalScore = scores.reduce(sum);
    function sum(total , value){
        return total + value ;
    }
    return totalScore ;
}
console.log(finalScore ( [20,  13,  37 ] ));
// end //



// Problem 11 :-
/*
What is the average marks of Jerry?;
*/
function average (arrOfMarks){
    let sum = 0;
    for(let i = 0; i < arrOfMarks.length; i ++){
     sum = sum + arrOfMarks[i];
    }
    let avg = (sum / arrOfMarks.length).toFixed(2);
    return +avg ;
}
console.log(average ([75.25, 65, 80, 35.45, 99.50]));
// end //



// Problem 12 :-
/*
What is the total price of products?;
*/
const totalCost = (products) => {
	let sum = 0;
    for(let i = 0; i < products.length; i++){
        let Prices = products[i].price
        sum += Prices ;
    }
    return sum ;
};
console.log(totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]));
// end //



// Problem 13 :-
/*
If array,s object property and array's second element are same, remove the property of object and return "Yes" or return "No";
*/
const deleteProperty =(arr)=>{
    let objectProp = Object.keys(arr[0])[0];
    let arrayProp = arr[1];
    if(objectProp == arrayProp){
        delete arr[0][objectProp];
        return "YES"
    }else{
        return "NO"
    }
}
console.log(deleteProperty([{fname:'John',},'fname']))
console.log(deleteProperty([{lastName:'Mithila',},'fname']));
// end //



// Problem 14 :-
/*
Which one gotten highest marks ?;
*/
function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
    if(marksOfJim < marksOfDela){
    if(marksOfChinku < marksOfDela){
        return "Dela";
    }else{
        return "Chinku";
    }
    }else{
    if(marksOfChinku < marksOfJim){
        return "Jim";
    }else{
        return "Chinku";
    }
    }
}
console.log(JimOrDelaOrChinku(84 , 99 , 77 ));
// end //



// Problem 15 :-
/*
Grating the mark;
*/
function findGrade(marks){
    if(marks >= 80){
        return "A";
    }else if (marks >= 60 && marks < 80){
        return "B";
    }else if (marks >= 50 && marks < 60){
        return "C";
    }else if (marks >= 40 && marks < 50){
        return "D";
    }else if (marks < 40){
        return "F";
    }
}
console.log(findGrade( 95 ));
// ---------- Grading With Loop ----------- //
function gradingShort(marks){
    const requerdMarks = [100, 90, 80, 60 , 50 , 39, 0];
    const grads = ["A+", "A", "B", "C", "D", "F"];
    for(let i = 0; i < requerdMarks.length; i++ ){
        if(marks <= requerdMarks[i] && marks > requerdMarks[i+1]){
            return grads[i];
        }else{
            // return "Your Input is Wrong"
        }
    }
    return "Your Input is Wrong" ;
}
console.log(gradingShort(95));
// --------- Grading With Loop END -------- //
// end //



// Problem 16 :-
/*
Make sure the triangle is Isosceles or not;
*/
function checkTriangle(side1, side2, side3){
    let Isosceles = "";
    if(side1 == side2 && side1 == side3){
        Isosceles = "No";
    }else if (side1 == side2 || side1 == side3 || side2 == side3){
        Isosceles = "Yes"
    }
    else{
        Isosceles = "No";
    }
    return Isosceles ;
}
console.log(checkTriangle(8,0,1));
// end //



// Problem 17 :-
/*
Set some group for specific word. and make sure which word in which group;
*/
function getLetter(s) {

    let letter = "";
    let inputStr = s.toLowerCase();
    let firstChtr = inputStr[0];
    
    let set_A = ['a' , 'e', 'i', 'o', 'u'];
    for(let i= 0; i < set_A.length; i ++){
        switch (firstChtr){
            case set_A[i]:
            letter = "A" ;
            break; 
        }
    }
    let set_B = ['b' , 'c', 'd', 'f', 'g'];
    for(let i= 0; i < set_B.length; i ++){
        switch (firstChtr){
            case set_B[i]:
            letter = "B" ;
            break; 
        }
    }
    let set_C = ['h' , 'j' , 'k', 'l', 'm'];
    for(let i= 0; i < set_C.length; i ++){
        switch (firstChtr){
            case set_C[i]:
            letter = "C" ;
            break; 
        }
    }
    let set_D = ['n' , 'p' , 'q' , 'r' , 's' , 't' , 'v' , 'w' , 'x' , 'y' , 'z'];
    for(let i= 0; i < set_D.length; i ++){
        switch (firstChtr){
            case set_D[i]:
            letter = "D" ;
            break; 
        }
    }
    
    return letter ;
}
console.log(getLetter("Xhodfgt"));
/*
function getLetter(s) {
    let letter = "";
    let inputStr = s.toLowerCase();
    let firstChtr = inputStr[0];
    switch(firstChtr){
        case "a": case "e": case "i": case "o": case "u":
            letter = "A" ;
            break; 
        case "d": case "c": case "d": case "f": case "g":
            letter = "B" ;
            break; 
        case "h": case "j": case "k": case "l": case "m":
            letter = "C" ;
            break;
        default :
            letter = "D" ;
            break;
    }
    return letter ;
}
console.log(getLetter("adfgt"));
*/
// end //







