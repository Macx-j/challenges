// Arrow function to calculate average score
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate average scores for Dolphins and Koalas
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// Function to check the winner
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// Determine the winner for DATA 1
checkWinner(scoreDolphins, scoreKoalas);

// Determine the winner for DATA 2
checkWinner(85, 54);

1; //To explain the code step by step:

2; // The code defines an arrow function `calcAverage` that takes three parameters `score1`, `score2`, and `score3`. Inside the function, it calculates the average score by summing up the three scores and dividing the sum by 3. The result is returned by the function.

// The code calls the `calcAverage` function twice to calculate the average scores for the Dolphins and Koalas teams. The calculated averages are stored in the variables `scoreDolphins` and `scoreKoalas`, respectively.

// The code defines another function `checkWinner` that takes two parameters `avgDolphins` and `avgKoalas`. Inside the function, it checks if the average score of the Dolphins is at least twice as much as the average score of the Koalas. If it is, it prints a message stating that the Dolphins win. If the average score of the Koalas is at least twice as much as the average score of the Dolphins, it prints a message stating that the Koalas win. If neither condition is met, it prints a message stating that no team wins.

// The code calls the `checkWinner` function twice. The first time it passes the variables `scoreDolphins` and `scoreKoalas` as arguments, which contain the average scores calculated earlier. The second time it directly passes the values 85 and 54 as arguments.

// Based on the conditions in the `checkWinner` function, it will print the appropriate message to the console for each call. The messages will indicate which team wins based on the average scores provided.

//In summary, this code calculates the average scores for two teams using the `calcAverage` function and determines the winner using the `checkWinner` function. It then prints the result to the console. The code demonstrates the use of arrow functions and conditional statements to perform calculations and make comparisons.
