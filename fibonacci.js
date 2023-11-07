function fibonacci(lenght) {
    const fibArray = [0, 1];

    for (let i = 2; i < lenght; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray

}

const series = fibonacci(10)
console.log(series)