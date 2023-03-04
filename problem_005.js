function is_prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sum_prime(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (is_prime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sum_prime(977));
