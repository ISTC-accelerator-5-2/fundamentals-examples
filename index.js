// const arrayExample = [1, 2, 3, 4, 5, 0];

// const reverse = (array) => {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     const temp = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = temp;
//   }
//   return array;
// };

// const reversedArray = reverse([...arrayExample]);
// console.log({ reversedArray });

// const array = [{ a: 1 }, { a: 2 }, { a: 0 }];

// console.log(arrayExample.sort());

// array.sort((secondElement, firstElement) => {
//   if (secondElement.a > firstElement.a) return 1;
//   return -1;
// });

// console.log({ array });

const word = "asfajskfgkasg";
// const arrayOfStrings = ["fasfasf", "asfasf", "absafjk"];
console.log(word, word.split("").sort().join(""));
// console.log(arrayOfStrings.sort());
