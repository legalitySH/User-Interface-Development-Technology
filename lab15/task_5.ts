async function getPromise(): Promise<number> {
    return 21;
}

async function waitFunction() : Promise<void> {
   let value =  await getPromise();
   console.log(value);
   console.log(value*2);
}

waitFunction().finally();