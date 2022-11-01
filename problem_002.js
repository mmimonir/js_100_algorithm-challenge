// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.

// Example - For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

// Operator used - Arithmetic Operators, Rest Operators
// Built-in functions used - forEach()

function two_number_sum(number_one, number_two) {
  return number_one + number_two;
}

console.log(two_number_sum(1, 2));

function sum_all_numbers(...numbers) {
  let sum = 0;
  numbers.forEach((ele) => {
    sum += ele;
  });

  return sum;
}

console.log(sum_all_numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
