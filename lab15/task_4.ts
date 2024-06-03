// Задание 4

const newPromise = new Promise((resolve, reject) => {
    resolve(21);
});

console.log("Задание 4: ");
newPromise
    .then((value : number) => {
        console.log(value);
        return value * 2;
    })
    .then(value => console.log(value))