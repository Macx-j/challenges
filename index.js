const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const BMIMark = markMass / (markHeight * markHeight);
const BMIJohn = johnMass / (johnHeight * johnHeight);
console.log(BMIMark);
console.log(BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}!`);
}

//noteshort explanations://The BMI is calculated using the formula: BMI = mass / (height * height)

//The code initializes the mass and height variables for both Mark and John, and then calculates their respective BMIs using the formula.

//After calculating the BMIs, the code compares them using an if-else statement. If Mark's BMI is higher than John's, it prints a message saying "Mark's BMI is higher than John's". Otherwise, it prints a message saying "John's BMI is higher than Mark's".

//In simple terms, the code helps to determine who between Mark and John has a higher BMI, which is an indicator of their relative body fat levels.//
