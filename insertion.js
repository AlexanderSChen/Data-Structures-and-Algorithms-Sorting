function insertionSort(arr) {
    // for loop with i = 0 incrementing until equal to arr.length
    for(let i = 0; i < arr.length; i++) {
        // set currentValue to be first element
        let currentValue = arr[i];

        // set j to be i - 1 decrementing until j is equal to or less than -1 AND the element at arr[j] is greater than currentValue.
        for(var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
            // loop and swap higher element with element directly below it
            arr[j + 1] = arr[j];
        }
        // after inner loop finishes update arr[j + 1] to be currentValue.
        arr[j + 1] = currentValue;
    }
    return arr;
}

module.exports = insertionSort;