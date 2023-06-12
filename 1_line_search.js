/*линейный алгоритм поиска*/

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function searchItem(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] == item) {
      return i;
    }
  }
  return null;
}

console.log(`index in arr = ${searchItem(array, 44)}`);
console.log(`count iteration's = ${count}`);
