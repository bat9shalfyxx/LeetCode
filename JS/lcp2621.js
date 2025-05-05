async function sleep(millis) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), millis);
    });

    await promise;
}
