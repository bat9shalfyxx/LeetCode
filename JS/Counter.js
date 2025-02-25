var createCounter = (n) => {
    return (counter = () => {
        return n++;
    });
};
createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
