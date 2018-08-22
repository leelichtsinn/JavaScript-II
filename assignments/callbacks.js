const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const itemLog = (e) => {
  return console.log(e);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

firstItem(items, itemLog);

const arrLength = (e) => {
  return console.log(e.length);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, arrLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let result = arr[arr.length-1];
  return cb(result);
}

last(items, itemLog);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y;
  return cb(result);
}

sumNums(4, 5, itemLog);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  return cb(result);
}

multiplyNums(4, 5, itemLog);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let result = false;
  for (let i = 0; i < list.length; i++) {
    if (list.indexOf(item) !== -1) {
      result = true;
    }
  }
  return cb(result);
}

contains("Gum", items, itemLog);
contains("pizza", items, itemLog);

/* STRETCH PROBLEM */

// const dupes = ((e, i) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i]
//   }
// })

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
