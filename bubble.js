function bubbleSort(arr) {
    // declare swap which is a function that assigns index2 to index 1 and index 1 to index 2.
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // for loop that loops through i, i starts at length of array and decrements O(n) time complexity. Each loop the inner loop becomes shorter
    for(let i = arr.length; i > 0; i--) {
        // for loop that loops through j, now O(n^2) time complexity
        for(let j = 0; j < i - 1; j++) {
            // if element in j is greater than the value one index ahead then swap their positions so the lower value is on the lower index. Otherwise check next position
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;