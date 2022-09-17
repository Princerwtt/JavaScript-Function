
function searchValue(arr, value) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {

    if (value == arr[i]) {
      console.log(i);
      index = i;
    }

  }

  return index;
}
let searchArr = [1, 2, 77, 85, 55];

console.log(searchValue(searchArr, 90));
