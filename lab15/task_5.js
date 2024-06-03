async function getPromise() {
    return 21;
}
async function waitFunction() {
    let value = await getPromise();
    console.log(value);
    console.log(value * 2);
}
waitFunction().finally();
