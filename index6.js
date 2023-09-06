// Create object for Mark Miller
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * 2;
    return this.bmi;
  },
};

// Create object for John Smith
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * 2;
    return this.bmi;
  },
};

// Calculate BMI for Mark and John
mark.calcBMI();
john.calcBMI();

// Compare BMI and log the result
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(1)})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(1)})!`
  );
} else {
  console.log("Both Mark and John have the same BMI.");
}

//To explain the code step by step:

// The code creates an object `mark` that represents Mark Miller. It contains properties `fullName`, `mass`, and `height`, which store Mark's full name, mass, and height, respectively. It also includes a method `calcBMI` that calculates Mark's BMI (Body Mass Index) using the formula `(mass / height) * 2`. The calculated BMI is stored in the `bmi` property of the `mark` object.

2; // The code creates another object `john` that represents John Smith. It has similar properties and methods as the `mark` object, but with different values for `fullName`, `mass`, and `height`.

// The code calls the `calcBMI` method on both the `mark` and `john` objects. This calculates their respective BMIs and stores the results in the `bmi` properties of each object.

// The code compares the BMIs of Mark and John using an `if` statement. If Mark's BMI is greater than John's BMI, it logs a message to the console stating that Mark's BMI is higher. If John's BMI is greater than Mark's BMI, it logs a message stating that John's BMI is higher. If neither condition is met, it logs a message stating that both Mark and John have the same BMI.

// The code uses `console.log()` to print the appropriate message to the console based on the comparison of the BMIs.

//In summary, this code creates objects for Mark Miller and John Smith, calculates their respective BMIs using the `calcBMI` method, and compares their BMIs to determine which one is higher. The result is then printed to the console. The code demonstrates the use of objects, methods, and conditional statements to perform calculations and make comparisons.
