function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Example usage
const totals = [10, 20, 30, 40, 50];
const average = calcAverage(totals);
console.log("The average is:", average);

//To explain the code step by step:

1; //this first code defines a function `calcAverage` that took an array naming it `arr` as a parameter. The function here is calculating the average of the values in the array.

//2. Inside the `calcAverage` function, a variable `sum` has been initialized to 0. This variable will be used to store the sum of all the values in the array.

//3. The code is using a `for` loop to iterate over each element of the array. The loop starts at index 0 and continues as long as the index is less than the length of the array.

//4. Inside this loop, the current element of the array (`arr[i]`) has been added to the `sum` variable using the `+=` operator. This accumulates the sum of all the elements in the array.

//5. After this loop finishes, the code then calculates the average by dividing the `sum` by the length of the array (`arr.length`). The result is then returned as the output of the `calcAverage` function.

///6. The code then demonstrates the usage of the `calcAverage` function by creating an array i.e `totals` with values [10, 20, 30, 40, 50].

//7. The `calcAverage` function is called with the `totals` as the argument, and the returned average is stored in the variable `average`.

//8. Finally, the code uses `console.log()` to print a message to the console that includes the calculated average.

//In summary, this code defines a function `calcAverage` that calculates the average of an array of numbers. It then demonstrates the usage of this function by calculating the average of an example array and printing the result to the console.
