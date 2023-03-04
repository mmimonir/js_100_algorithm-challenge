function sequence(data) {
  for (i = 1; i < data.length; i++) {
    if (data[i] < data[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(sequence([1, 3, 5, 9, 11]));
console.log(sequence([1, 3, 9, 5, 11, 8]));
console.log(sequence([1, 3, 5, 9, 11, 12]));
