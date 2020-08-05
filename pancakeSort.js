// problem from Pramp interview

// sort the array using the flip helper function
function pancakeSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minPosition = findMin(arr, i);
        flip(arr, i, minPosition);
    }
    return arr;
}

// "flip" aka reverse the order of arr from start to end
function flip(arr, start, end) {
    let i = start;
    let j = end;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++, j--;
    }
    return arr;
}

// find the min value of array between start and end of array
function findMin(arr, start) {
    let minPosition = start;
    for (let i = start; i < arr.length; i++) {
        if (arr[i] < arr[minPosition]) {
            minPosition = i;
        }
    }
    return minPosition;
}