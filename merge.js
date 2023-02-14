function merge(arr1, arr2) {
    // initialize results array
    let results = [];
    let i = 0;
    let j = 0;

    // while i is less than arr1 length AND j is less than arr2 length continue looping
    while(i < arr1.length && j < arr2.length) {
        // if j element in arr2 is greater than arr1 then push arr1[i] to results and increment i else push arr2[j], this pushes the lower number first and sorts low to high.
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};