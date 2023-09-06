// Function to calculate tip
const calcTip = (bill) => {
  const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  return bill * tipPercentage;
};

// Test the calcTip function with a bill value of 100
const bill = 100;
const tip = calcTip(bill);
console.log(`The tip for a bill of ${bill} is ${tip}.`);

// Array of bills
const bills = [124, 48, 268];

// Array of tips
const tips = bills.map((bill) => calcTip(bill));

// Array of totals
const totals = bills.map((bill, index) => bill + tips[index]);

console.log(bills);
console.log(tips);
console.log(totals);

//To explain the code step by step:

1; // The code defines an arrow function `calcTip` that takes a `bill` parameter. Inside the function, it calculates the tip percentage based on the value of the `bill`. If the `bill` is between 50 and 300 (inclusive), the tip percentage is set to 0.15 (15%). Otherwise, if the `bill` is outside that range, the tip percentage is set to 0.2 (20%). The function then returns the calculated tip amount by multiplying the `bill` with the tip percentage.

2; // The code tests the `calcTip` function by assigning a bill value of 100 to the variable `bill` and calling the `calcTip` function with `bill` as the argument. The returned tip amount is stored in the variable `tip`. The code then uses `console.log()` to print a message that includes the original bill amount and the calculated tip amount.

3; //The code defines an array `bills` that contains three bill amounts: 124, 48, and 268.

4; //The code uses the `map()` method on the `bills` array to create a new array `tips`. The `map()` method applies the `calcTip` function to each element of the `bills` array, resulting in an array of tip amounts corresponding to each bill amount.

5; //The code uses the `map()` method again on the `bills` array, but this time it also takes an `index` parameter. Inside the `map()` callback function, it calculates the total value by adding the current bill amount (`bill`) and the corresponding tip amount (`tips[index]`). The `totals` array will contain the total amounts for each bill.

6; //The code uses `console.log()` to print the `bills`, `tips`, and `totals` arrays to the console.

//In summary, this code calculates the tip amount for a given bill using the `calcTip` function. It then demonstrates the usage of the `map()` method to calculate tip amounts for an array of bills and to calculate the total amounts for each bill. The final results are printed to the console.
