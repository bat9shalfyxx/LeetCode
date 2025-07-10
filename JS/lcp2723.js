const addTwoPromises = async function (promise1, promise2) {
    // const val1 = await promise1;
    // const val2 = await promise2;

    // let res = val1 + val2;
    // return res;

    return (await promise1) + (await promise2);
};
