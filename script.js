// 🟢 Easy (Beginner Level)


//Done by Myself

// 1. Greeting Function
// Write a function greet(name) that takes a name and prints:
 
// let name = prompt("Enter Your Name")
// function greet(name){
//     return` Hello, ${name}! Welcome to JavaScript.`
// }
// console.log(greet(name)) 


//Done by Myself

// 2. Sum of Two Numbers
// Write a function add(a, b) that returns the sum of two numbers.

// let a = parseInt(prompt("Enter First number"))
// let b = parseInt(prompt("Enter Second number"))
// function add(a,b){
//     return a+b;
// }
// console.log(add(a,b))


//Done by Myself

// 3. Default Parameters
// Create a function multiply(a, b = 2) that multiplies two numbers.
//  If b is not passed, it should use the default value 2.

// let a = parseInt(prompt("Enter First number"))
// function multiply(a,b=2){
//     return a*b
// }
// console.log(multiply(a))


// 🟡 Medium (Intermediate Level)


//Done by Myself

// 4. Find Maximum of Three Numbers
// Write a function findMax(a, b, c) that returns the largest of three numbers.

// let a = parseInt(prompt("Enter First number"))
// let b = parseInt(prompt("Enter Second number"))
// let c = parseInt(prompt("Enter First number"))
// function findMax(a, b, c){
//     if(a>b&&a>c){
//         return `${a} is the largest number`
//     }
//     else if(b>a&&b>c){
//         return `${b} is the largest number`
//     }
//     else{
//         return `${c} is the largest number`
//     }
// }
// console.log(findMax(a,b,c))


//Done by Myself

// 5. Count Words in a Sentence
// Write a function countWords(sentence) that returns how many words are in a sentence.

// let Sentence = prompt("Enter The Sentence")
// function countWords(Sentence){
//     let words = Sentence.split(" ")
//     return words.length;
// }
// console.log(countWords(Sentence))


//Done by Myself

// 6. Check Even or Odd
// Write an arrow function isEven(num) that returns true if a number is even, otherwise false.

// num = parseInt(prompt("Enter a Number : "))
// let isEven = (num) =>{
//     if(num%2==0){
//         return ` TRUE ${num} is Even Number`
//     }
//     else{
//         return ` FALSE ${num} is Even Number`
//     }
// }
// console.log(isEven(num))


//Done by Myself

// 7. Calculate Factorial
// Write a function factorial(n) that returns the factorial of a number.

// let n = parseInt(prompt("Enter a number for factorial"))
// function factorial(n){
//     let fact = 1;
//     if(n==0){
//         return 1;
//     }
//     for (i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact;
// }
// console.log(`The factorial of the given number ${n} is ${factorial(n)}`)



// 🔵 Difficult (Advanced / Logical Thinking)
//Done by Myself

// 8. Count Vowels in a String
// Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a string.

// Method 1
// let str = prompt("Enter the String")
// function countVowels(str){
//     let vowels = 0;
//     for(i=0; i<=str.length; i++ ){
//         if(str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=="o"||str[i]=="O"||str[i]=="u"||str[i]=="U"){
//             vowels+=1
//         }
//     }
//     return vowels;
// }
// console.log(`There are ${countVowels(str)} Vowels in this String`)

//Done by Myself

// 9. Create a function to check prime number
// Write a function isPrime(num) that returns true if the number is prime, otherwise false.


// let num = parseInt(prompt("Enter a Number"))
// function isPrime(num) {

//     if(num==2||num==3||num==5||num ==7){
//         return `True ${num} is a prime number` ;
//     }
//     else if(num%2==0||num%3==0||num%5==0||num%7==0){
//         return `False ${num} is not a prime number`
//     }
//     else{
//         return `True ${num} is a prime number`
//     }

// }
// console.log(isPrime(num))

//Done by Myself

// 10. Closure Counter Write a function createCounter() that returns another function.
//  Every time the inner function is called, it should return the next count (1, 2, 3...).

//Done by Myself

// function createCounter() {
//   let count = 0; 
//   return function anotherfunction() {
//     count++;
//     return count;
//   };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter()); 






// {{{[[[[[[[[[[[[[[{----MINI PROJECT -1---}]]]]]]]]]]]]]]}}}

//Done by Myself

// 🎯 Mini Project 1 – Simple Calculator
// Concepts Covered:
// Functions, parameters, return values, conditionals, switch-case.
// Objective:
// Build a calculator that performs addition, subtraction, multiplication, and division using functions.

// let a = parseInt(prompt("Enter the First Number"))
// let b = parseInt(prompt("Enter the Second Number"))
// let c = prompt("Enter the operator")
// function calculator(a,b,c){
//     switch (c){
//         case "+":
//             return a+b;
//             break;
            
//         case "-":
//             return a-b;
//             break;
            
//         case "*":
//             return a*b;
//             break;
            
//         case "/":
//             if(b==0){
//             return "Anything divided by 0 is infinity";
//             break;
//             }
//             else{
//                 return a/b;
//             }
//         default:
//             return "invalid string"
//             break;
//     }

// }
// console.log(calculator(a,b,c))


// {{{[[[[[[[[[[[[[[{----MINI PROJECT -2---}]]]]]]]]]]]]]]}}}

// 🎯 Mini Project 2 – Student Grade Evaluator

//Done by Myself

// Concepts Covered:
// Function declaration, return values, conditional statements, arrow functions.

// let a = parseInt(prompt("Enter the mark for First subject : "))
// let b = parseInt(prompt("Enter the mark for Second subject : "))
// let c = parseInt(prompt("Enter the mark for Third subject : "))
// let d = parseInt(prompt("Enter the mark for Fourth subject : "))
// let e = parseInt(prompt("Enter the mark for Fifth subject : "))
// let avg = (a+b+c+d+e)/5
// let Grade =""
// getGrade=(avg)=>{
//     if(100>=avg>=90){
//         return "Grade : A"
//     }
//     else if(90>avg>=80){
//         return "Grade : B"
//     }
//     else if(80>avg>=70){
//         return "Grade : C"
//     }
//     else if(70>avg>=60){
//         return "Grade : D"
//     }
//     else{
//         return "Grade : Fail"
//     }
// }
// console.log(getGrade(avg)) 




//------------- Mini task3 is done in HTML page using internal JS--------------\\


// {{{[[[[[[[[[[[[[[{----MINI PROJECT -4---}]]]]]]]]]]]]]]}}}

//Done by Myself

// let value = parseInt(prompt("Enter the Value : "))
// let scale= prompt("Enter the Scale : ")
// function convertTemperature(value,scale){
//     if (scale=="C"||scale=="c"){
//         let Fahrenheit=(value * 9/5) + 32
//         return `${value}° Celsius = ${Fahrenheit}° Fahrenheit`
//     }
//     else if(scale=="F"||scale=="f"){
//         let Celsius = (value - 32) * 5/9
//         return `${value}° Fahrenheit = ${Celsius}° Celsius`
//     }
// }
// console.log(convertTemperature(value,scale))
