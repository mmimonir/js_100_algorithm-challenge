// এ্যারে element রিপ্লেস করতে হবে ফাংশনে  দেওয়া প্যারামিটার এর মান দিয়ে।
// প্যারামিটার- এ্যারে, রিপ্লেসার ভ্যালু, রিপ্লেস করার ভ্যালু। যেমন েএ্যারের মধ্যে 1 এর সব জায়গায় 5 রাখতে হবে।
// তাহলে প্যারামিটার হিসেবে দিতে হবে array_replace([1, 2, 1, 4, 5, 1, 7, 8, 9, 1], 5, 1);
// এই ফাংশন কল করলে আউটপুট হবে [ 5, 2, 5, 4, 5, 5, 7, 8, 9, 5]

function array_replace(array, replacer, which_replace) {
  array.forEach((ele, index) => {
    if (ele === which_replace) {
      array[index] = replacer;
    }
  });
  console.log(array);
}

array_replace([1, 2, 1, 4, 5, 1, 7, 8, 9, 1], 5, 1);

// time complexity: O(n)
// space complexity: O(1)
