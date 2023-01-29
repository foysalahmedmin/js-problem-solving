

// Problem 1 :-
/*
Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to 
help Harry calculate how much money the shopkeeper will return.
*/
let money = 1000;
let orangeCost = 400;
let appleCost = 300;
let totalCost = orangeCost + appleCost;
let returnMoney = money - totalCost;
console.log(" Return money is =",returnMoney);
// end //


// Problem 2 :-
/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and 
Bangla of a student.
*/
let Mathematics = 75.25;
let Biology = 65;
let Chemistry = 80;
let Physics = 35.45;
let Bangla = 99.50;
let totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
let averageMarks = totalMarks / 5;
console.log("Average Mark Is =", +averageMarks.toFixed(2));
// end //


// Problem 3 :-
/*
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to 
combine these two strings and print them in one line. Help John write the program.
*/
let firstLine = "I am want to be";
let secondLine = "an awesome web developer";
let fulLine = firstLine + secondLine;
console.log(fulLine);
// end //


// Problem 4 :-
/*
Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the 
remainder would be if she divided the number by 5. Help Sarah write the program
*/
let number = 119;
let remainder = number % 5;
console.log("The remainder is =", remainder);
// end //


// Problem 5 :-
/*
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/
let fruits = ['Apple', 'Banana', 'Orange'];
let BananaIdex = fruits.indexOf("Banana");
fruits[BananaIdex] = "Mango";
let OrangeRemove = fruits.pop();
let WatermelonAdd = fruits.push("Watermelon");
console.log(fruits);
// end //


// Problem 6 :-
/*
Write a program to find your and your friends’ grades using if-else.
*/
let Foysal = 85;
let Tom = 66;
let Jane = 95;
let Peter = 56;
let John = 40;
let resultOF = Foysal;
if(resultOF >= 80){
    console.log("A Grade");
}else if (resultOF >= 60 && resultOF < 80){
    console.log("B Grade");
}else if (resultOF >= 50 && resultOF < 60){
    console.log("C Grade");
}else if (resultOF >= 40 && resultOF < 50){
    console.log("D Grade");
}else if (resultOF < 40){
    console.log("F Grade");
}
// first way end //

// second way //
let Names = ["Foysal", "Tom", "Jane", "Peter", "John"];
let Results = [85, 66, 95, 56, 40];
let length = Results.length;
for(var i = 0; i < Results.length; i++){
    
    let resultOf = Results[i];
    let nameOf = Names[i];
    if(resultOf >= 80){
        console.log(nameOf +" "+ "A Grade");
    }else if (resultOf >= 60 && resultOf < 80){
        console.log(nameOf +" "+ "B Grade");
    }else if (resultOf >= 50 && resultOf < 60){
        console.log(nameOf +" "+ "C Grade");
    }else if (resultOf >= 40 && resultOf < 50){
        console.log(nameOf +" "+ "D Grade");
    }else if (resultOf < 40){
        console.log(nameOf +" "+ "F Grade");
    }
}
// second way end  //
// end //



// Problem 7 :-
/*
 You are given three numbers 13, 79, and 45. Write a program that will print the 
largest number using if-else
*/
let number1 = 13;
let number2 = 79;
let number3 = 45;
if(number1 < number2){
    if(number3 < number2){
        console.log("number-2 is largest number");
    }else{
        console.log("number-3 is largest number");
    }
}else{
    if(number3 < number1){
        console.log("number-1 is largest number");
    }else{
        console.log("number-3 is largest number");
    }
}
// end //

// Problem 8 :-
/*
 You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else
*/
let side1 = 9;
let side2 = 8;
let side3 = 9;
if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log("This Is an 'Insosceles' Triangles.");
}else{
    console.log("This Is Not an 'Insosceles' Triangles.");
}
// end //


// Problem 9 :-
/*
Write a program to make sure odd number or even number using if-else;
*/
let TheNumber = 5;
let TheRemainder = TheNumber % 2;
if(TheRemainder == 0){
    console.log('It is an Even Number');
}else{
    console.log('It is an Odd Number');
}
// end //


// Problem 10 :-
/*
Show the Numbers of 58 to 98;
*/
let startNum = 58;
while(startNum <= 98){
    console.log(startNum);
    startNum++
}
// end //


// Problem 11 :-
/*
Show then odd Numbers of 581 to 623;
*/
let starOddtNum = 581;
while(starOddtNum <= 623){
    console.log(starOddtNum);
    starOddtNum += 2;
}
// end //


// Problem 12 :-
/*
Show your uses mobiles names from array;
*/
let phones = ["nokia", "symphony", "samsung", "huwawy", "vivo"];
let phoneIdex = 0;
while(phoneIdex < phones.length){
    console.log(phones[phoneIdex]);
    phoneIdex++
}
// end //


// Problem 13 :-
/*
Make a array with some random number 30 t0 84. than start a loop to showing this numbers ,
bt when  44 number will have come the loop would be stopt;
*/
let RandomNum = [30, 35, 75, 72, 80, 36, 37, 39, 40, 43, 44, 50, 84];
for (let i = 0; i < RandomNum.length; i++){
    console.log(RandomNum[i]);
    if(RandomNum[i] == 44){
        console.log("I have to take break.");
        break;
    }
}
//  end //



// Problem 14 :-
/*
Make a array with some random number 135 t0 300. than start a loop to showing this numbers ,
bt when the number will have upto 200, the loop would be skip those numbers;
*/
let randomNum = [135, 175, 272, 280, 136, 237, 139, 140, 243, 300, 150];
for (let i = 0; i < randomNum.length; i++){
    console.log(randomNum[i]);
    if(randomNum[i] > 200){
        continue;
    }
}
// end //



// Problem 15 :-
/*
Make a array with 1-15 number by loop. and the number have to be string in this array;
*/
let LoopArray = [];
for(let i = 0; i < 15; i++){
    // LoopArray[i] = i+1;
    LoopArray.push((i+1).toString());
}
console.log(LoopArray);
// end //