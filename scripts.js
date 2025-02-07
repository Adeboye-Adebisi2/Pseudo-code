//   Problem 1: Write a function that calculates and prints the area of a rectangle given its length and width.
solution 
// length and breadth
//    area of rectangle = L*B
//      print final answer


// Problem 2: Write a function that converts a temperature from Celsius to Fahrenheit and prints the result.
 solution
//  to convert Celsius to Fahrenheit
//  multiply Celsius by 9, then divide by 5 add add 32
//  Fahrenheit = final answer

// Problem 3: Write a function that calculates the factorial of a number and prints the result.
solution
// number multiplied by the next smallest number that follows to 1 
//  num = 3
//  3! = 3*2*1 = 6
 
// Problem 4: Write a function that checks if a number is prime and prints "Prime" or "Not Prime".
solution
// number greater than 1 that can only be divided by 1 or itself
// if num <= 1 not prime
// if num / 2 not prime
// but if no remainder is found its prime

// Problem 5: Write a function that calculates the sum of all even numbers between 1 and a given number, then prints the result.
solution
// if number is divisible by 2 without remainder print even
// if its divisible by2 with a remainder print not even 
// add the even numbers together and print the sum total

// Problem 6: Write a function that calculates the compound interest given principal, rate, time, and number of compounding periods, then prints the result.



// Problem 7: Write a function that calculates the volume of a sphere given its radius and prints the result.



// Problem 8: Write a function that calculates the hypotenuse of a right-angled triangle given the other two sides and prints the result.
solution
// 2 numbers a, b
// c = a*a + b*b
 
// Problem 9: Write a function that calculates the Body Mass Index (BMI) given weight (in kg) and height (in meters), then prints the BMI category (Underweight, Normal, Overweight, Obese).
solution
// weight and height
// weight / height*height
// if bmi is 18.5 print underweight
// if it is above 18.5 and 24.9 print normal
// if it is  25 and 29.9 print overweight
// if it is  >29.9 print obesity 

// Problem 10: Write a function that calculates the sum of the digits of a number and prints the result.
solution
// check the length of number to determine the digit 
// get the sum by adding the numbers together  



// Problem 12: Write a function that calculates the roots of a quadratic equation given coefficients a, b, and c, then prints the roots.



// Problem 13: Write a function that calculates the sum of the squares of the first n natural numbers and prints the result.
solution
// sumofSquare = a number
// counting from 1 *1 + 2*2 till you get to the number
//  add the square roots numbers to get the sum total 
// print sum total



// Problem 14: Write a function that calculates the greatest common divisor (GCD) of two numbers and prints the result.
solution
//  Greatest common divisor of two numbers is the  larger number that 
//  divides both numbers without leaving a remainder
//  num1 num2 e.g 10 20
//  check through to see the same num that can divide 10 and 20 without a remainder is 10


// Problem 15: Write a function that calculates the least common multiple (LCM) of two numbers and prints the result.
solution
//  numA numB
// find GCD 
// LCM=(numA * numB) /  GCD 


// Problem 16: Write a function that prints the correct result grade and description of a student. Using the data below:

// Grade scale 
// A: 70–100%
// B: 60–69%
// C: 50–59%
// D: 45–49%
// F: 0–39%

// Grade point value (GP) 
// A: 5.00
// B: 4.00
// C: 3.00
// D: 2.00
// F: 0.00

// Grade descriptions 
// A: First Class Honours
// B: Second Class Honours, Upper
// C: Second Class Honours, Lower
// D: Third Class

// The result printed result format should be "A - 5.00 - First Class Honours"

solution
// if  scores >= 70  print A  -5.00 -First Class Honours
// if  scores >= 60  print B  -4.00 -second Class Honours, upper
// if  scores >= 50  print C  -3.00 -second Class Honours,lower
// if  scores >= 45 print D  -2.00 -third Class 
// if not print fail