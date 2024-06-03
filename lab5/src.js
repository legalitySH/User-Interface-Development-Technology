alert("Вариант 1");
function makeCounter() {
    let currentCount = 1;
    return function () {
        return currentCount++;
    }
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

let counter2 = makeCounter();

alert(counter2());

alert("Вариант 2");


let currentCount = 1;

function DoCounter() {
    return function () {
        return currentCount++;
    }
}


let count = DoCounter();
let count2 = DoCounter();

alert(count());
alert(count());

alert(count2());
alert(count2());


function area(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log("Area 1: " + area(1)(2)(3));
console.log("Area 2: " + area(3)(4)(5));


let x = 0, y = 0; 

function* doMove(type) {
  for (let i = 0; i < 10; i++) {
    switch (type) {
      case "left":
        x -= 1;
        break;
      case "right":
        x += 1;
        break;
      case "up":
        y += 1;
        break;
      case "down":
        y -= 1;
        break;
      default:
        console.log("Неправильная команда!"); 
        return;
    }
    yield [x, y];
  }
}

for (let i = 0; i < 10; i++) {
  const direction = prompt(`Введите команду (up, down, left, right) - текущие координаты: [${x},${y}] `);
  let iterator = doMove(direction).next();
}

console.log(window);

var text = "Some text";
text = window.text;

function sum(a,b)
{
    return a+b;
}


console.log(window.sum(2,5));
console.log(text);



