

// Задание 1

const myPromise = new Promise((resolve, reject) =>  {
    setTimeout( () => resolve(Math.floor(Math.random() * 100)), 3000);
});

myPromise.then((resolve) => {console.log(resolve)} , (reject) => {})

