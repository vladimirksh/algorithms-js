/*бинарный алгоритм поиска*/

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;

    middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return position;
}

console.log(`index in arr = ${binarySearch(array, 13)}`);
console.log(`count iteration's = ${count}`);

function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(array, 0, 0, array.length));
console.log(count);
