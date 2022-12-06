// Given a rectangular matrix of characters, add a border of asterisks(*) to it
// আমাদের একটি স্ট্রিং এ্যারে দেওয়া হবে। এ্যারের প্রথমে এবং শেষে এ্যারে এলিমেন্ট সংখ্যা থেকে 2টি বেশি * যোগ করতে হবে,
// যেমন 🚀  [ '*****' এ্যারে এলিমেন্ট '*****' ]
// এবং প্রত্যেক এলিমেন্ট এর আগে এবং পরে একটি করে * যোগ করতে হবে।
// ফাংশন কল addBorder(["abc", "def", "ghi"]
// আউটপুট [ '*****', '*abc*', '*def*', '*ghi*', '*****' ]

function addBorder(picture) {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = `*${picture[i]}*`;
  }
  return picture;
}

console.log(addBorder(["abc", "def", "ghi"]));
