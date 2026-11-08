const mergeSort = (arr) => {
    const sort = (arr) => {
        if (arr.length === 1) {
            return arr.slice();
        }
        const mid = Math.floor(arr.length / 2);
        l = sort(arr.slice(0, mid));
        r = sort(arr.slice(mid, arr.length));
        console.log(mid, arr.length - mid);
        console.log(arr.slice(0, mid), arr.slice(mid, arr.length));
        console.log(l, r);
        let i = 0, j = 0;
        while (i < l.length || j < r.length) {
            if (i === l.length) {
                arr[i + j] = r[j];
                j++;
            } else if (j === r.length) {
                arr[i + j] = l[i];
                i++;
            } else {
                if (l[i] < r[j]) {
                    arr[i + j] = l[i];
                    i++;
                } else {
                    arr[i + j] = r[j];
                    j++;
                }
            }
        }
        return arr;
    }
    return sort(arr);
}



// console.log(mergeSort([1]));
// console.log(mergeSort([1, 2]));
// console.log(mergeSort([1, 2, 3]));
// console.log(mergeSort([1, 2, 3, 4]));
// console.log(mergeSort([1, 2, 3, 4, 5]));
// console.log(mergeSort([1, 2, 3, 4, 5, 6]));
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7]));