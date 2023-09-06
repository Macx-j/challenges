const dolphinsScores = [44, 98, 100];
const koalasScores = [65, 54, 49];

// Calculate average score for Dolphins
let sumDolphins = 0;
for (let i = 0; i < dolphinsScores.length; i++) {
  sumDolphins += dolphinsScores[i];
}
const averageDolphins = sumDolphins / dolphinsScores.length;

// Calculate average score for Koalas
let sumKoalas = 0;
for (let i = 0; i < koalasScores.length; i++) {
  sumKoalas += koalasScores[i];
}
const averageKoalas = sumKoalas / koalasScores.length;

// Compare average scores and determine the winner
if (averageDolphins > averageKoalas) {
  console.log("Dolphins win the trophy");
} else if (averageKoalas > averageDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

// Assign average scores to variables if needed
const scoreDolphins = averageDolphins;
const scoreKoalas = averageKoalas;

//The code initializes two arrays, dolphinsScores and koalasScores, which contain the scores of the Dolphins and Koalas teams in a series of matches.

//The code then calculates the average score for the Dolphins team. It initializes a variable sumDolphins to store the sum of all scores, and then uses a for loop to iterate through each score in the dolphinsScores array. Inside the loop, it adds each score to the sumDolphins variable. Finally, it divides the sum by the number of scores to calculate the average, which is stored in the averageDolphins variable.

//Similarly, the code calculates the average score for the Koalas team. It initializes a variable sumKoalas to store the sum of all scores, and then uses a for loop to iterate through each score in the koalasScores array. Inside the loop, it adds each score to the sumKoalas variable. Finally, it divides the sum by the number of scores to calculate the average, which is stored in the averageKoalas variable.

//The code then compares the average scores of the Dolphins and Koalas teams using an if-else statement. If the average score of the Dolphins is greater than the average score of the Koalas, it prints "Dolphins win the trophy". If the average score of the Koalas is greater, it prints "Koalas win the trophy". If both teams have the same average score, it prints "Both win the trophy".

//Finally, the code assigns the average scores to variables scoreDolphins and scoreKoalas if they are needed for further use.

//This code essentially calculates the average scores for two teams and determines the winner based on the comparison of their average scores.
