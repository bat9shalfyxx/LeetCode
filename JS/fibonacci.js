var fibGenerator = function* () {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};

const fibonacciSequence = fibGenerator();
console.log(fibonacciSequence.next().value);
console.log(fibonacciSequence.next().value);
console.log(fibonacciSequence.next().value);
console.log(fibonacciSequence.next().value);
console.log(fibonacciSequence.next().value);
console.log(fibonacciSequence.next().value);
//  cd LeetCode/JS