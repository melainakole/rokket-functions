// 1. Composite function
const rokket = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

// 2. Longest string
const rokket = (arr) => {
  longestIndex = 0;
  arr.forEach((element, index) => {
    if (element.length > arr[longestIndex].length) {
      longestIndex = index;
    }
  });
  return arr[longestIndex];
};

// 3. String repetition
const rokket = (A, N) => {
  let repeatedString = "";
  for (let i = 0; i < N; i++) {
    repeatedString += A;
  }
  return repeatedString;
};

// 4. Only last names
const rokket = (list) => list.map((x) => x.lastName);

// 5. Unique numbers
const rokket = (arr1, arr2) => {
  const uniqueNumbers = new Map();
  arr1.forEach((x) => uniqueNumbers.set(x, true));
  arr2.forEach((x) => uniqueNumbers.set(x, true));
  return Array.from(uniqueNumbers.keys());
};
