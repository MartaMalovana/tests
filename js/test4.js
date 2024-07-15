function solution(n) {
    const arr = [];
    for (i = 0; i <= n; i++) {

        if (arr.length === 0) {
            arr.push(0);
        };

        if (arr.length === 1) {
            arr.push(1);
        };

        if (arr.length >= 2) {
            const num = arr.slice(-2).reduce((acc, el) => {
                String(el).split("").map(digit => acc += Number(digit));
                return acc;
            }, 0);
            arr.push(num);
        }
    };
    console.log(arr[n]);
    return arr[n];
};


solution(1);
solution(6);
solution(10);