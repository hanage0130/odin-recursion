function fibs(n) {
    const fib = [0];
    if (n >= 2) {
        fib[1] = 1;
    }
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};
function fibsRec(n) {
    const fib = [0];
    if (n >= 2) {
        fib[1] = 1;
    }
    for (let i = 2; i < n; i++) {
        fib[i] = -1;
    }
    function rec(x) {
        if (fib[x] != -1) {
            return fib[x];
        }
        return fib[x] = rec(x - 1) + rec(x - 2);
    }
    rec(n - 1);
    return fib;
}

// const isEqual = (arr1, arr2) => {
//     return arr1.every((element, index) => element === arr2[index]);
// }

// for (let i = 1; i <= 10; i++) {
//     const a = fibs(i);
//     const b = fibsRec(i);
//     console.log(a);
//     if (!isEqual(a, b)) {
//         console.log(i);
//         break;
//     } 
// }