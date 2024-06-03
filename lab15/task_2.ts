// Задание 2

const delayFunction = (delay: number) : Promise<number> =>
{
    return new Promise((resolve) => {
        setTimeout(() => resolve(Math.floor(Math.random() * 100)), delay);
    });
}

Promise.all([delayFunction(1000), delayFunction(2000), delayFunction(3000)])
    .then((values) => {
        console.log(values);
    });

