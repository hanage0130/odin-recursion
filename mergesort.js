const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const l = mergeSort(arr.slice(0, mid));
    const r = mergeSort(arr.slice(mid, arr.length));
    const res = [];
    let i = 0, j = 0;
    while (i < l.length || j < r.length) {
        if (i === l.length) {
            res.push(r[j]);
            j++;
        } else if (j === r.length) {
            res.push(l[i]);
            i++;
        } else {
            if (l[i] <= r[j]) {
                res.push(l[i]);
                i++;
            } else {
                res.push(r[j]);
                j++;
            }
        }
    }
    return res;
}

// console.log(mergeSort([]));
// console.log(mergeSort([73]));
// console.log(mergeSort([1, 2, 3, 4, 5]));
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));