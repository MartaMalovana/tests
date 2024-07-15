function solution(s, c) {
    const newArr = s.split("");
    const newCosts = [...c];

    let result = 0;

    let letter = newArr.find((el, i, arr) => el === arr[i + 1]);

    while (letter) {
        const i = newArr.indexOf(letter);
        newArr.splice(i, 1);
        result = result + newCosts[i];
        newCosts.splice(i, 1);
        letter = newArr.find((el, i, arr) => el === arr[i + 1]);
    };

    console.log(result);
    return result;

}


solution("abccbd", [0, 1, 2, 3, 4, 5]);
solution("aabbcc", [1, 2, 1, 2, 1, 2]);
solution("aaaa", [3, 4, 5, 6]);