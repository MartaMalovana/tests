function solution(n) {
    const arr = [];
    let x = 0;

    while (Math.pow(2, x) <= 1000) {
        arr.push(Math.pow(2, x));
        x++;
    };

    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(arr.includes(i) ? "POWER" : i);
    };

    const main = document.querySelector(".main");

    const container = document.createElement("div");

    result.map(el => {
        const newLine = document.createElement("p");
        newLine.textContent = el;
        container.append(newLine);
    });

    main.append(container);
};

solution(20);