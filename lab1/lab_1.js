console.log('Задание 1:');
let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1 / 0;
let answer = true;
let no = null;
console.log(typeof a, typeof name, typeof i, typeof double, typeof result, typeof answer, typeof nullable);


console.log('Задание 2:');
console.log("Площадь четырёхугольника со сторонами 45 и 21 = " + 45 * 21 + ' мм');
console.log('В четырёхугольник поместиться ' + Math.floor((45 * 21) / 5) + ' квадратов со сторонами 5 мм')


console.log('Задание 3');
let I = 2;
let A = ++I;
let B = I++;
if (A == B) {
  console.log("A = B");
} else if (A > B) {
  console.log("A > B");
} else {
  console.log("A < B");
}


console.log('Задание 4:');
let string1 = 'Котик';
let string2 = 'котик';
let string3 = 'китик';
let string4 = 'Кот';
let string5 = 'Привет';
let string6 = 'Пока';
let string7 = '53';
let string8 = '3';
let string9 = '5мм';
let string10 = '-2';
let string11 = '34';

let result1 = string1 == string2 ? 'Строки равны' : ' Строки не равны';
console.log(result1);
let result2 = string1 == string3 ? 'Строки равны' : ' Строки не равны';
console.log(result2);
let result3 = string4 == string1 ? 'Строки равны' : ' Строки не равны';
console.log(result3);
let result4 = string5 == string6 ? 'Строки равны' : ' Строки не равны';
console.log(result4);
let result5 = 73 == '53' ? 'Выражения равны' : 'Выражения не равны';
console.log(result5);
let result6 = false == 0 ? 'Выражения равны' : 'Выражения не равны';
console.log(result6);
let result7 = 54 == true ? 'Выражения равны' : 'Выражения не равны';
console.log(result7);
let result8 = 123 == false ? 'Выражения равны' : 'Выражения не равны';
console.log(result8);
let result9 = true == string8 ? 'Выражения равны' : 'Выражения не равны';
console.log(result9);
let result10 = 3 == string9 ? 'Выражения равны' : 'Выражения не равны';
console.log(result10);
let result11 = 8 == string10 ? 'Выражения равны' : 'Выражения не равны';
console.log(result11);
let result12 = 34 == string11 ? 'Выражения равны' : 'Выражения не равны';
console.log(result12);
let result13 = null == undefined ? 'Выражения равны' : 'Выражения не равны';
console.log(result13);




console.log('Задание 5:');

let fullName = prompt('Введите имя преподавателя');
console.log(fullName);
let lowerFullName = fullName.toLowerCase();
console.log(lowerFullName);
if (lowerFullName === 'марина' ||
  lowerFullName === 'марина фёдоровна' ||
  lowerFullName === 'марина федоровна' ||
  lowerFullName === 'кудлацкая марина фёдоровна' ||
  lowerFullName === ' кудлацкая марина федоровна') {
  alert('Верно!');
}
else {
  alert('Не угадал');
}

console.log('Задание 6:');

let educationality = 0;
let rus = confirm('Русский сдан?');
if (rus === true) {
  educationality++;
}
let math = confirm('Математика сдана?');
if (math === true) {
  educationality++;
}
let eng = confirm('Английский сдан?');
if (eng === true) {
  educationality++;
}
if (educationality === 0) {
  alert('Заберите ваши документы в деканате');
}
else if (educationality > 0 && educationality <= 2) {
  alert('Пересдача');
}
else {
  alert('Ура победа. Поздравляем');
}


console.log('Задание 7:');
console.log(true + true, 0 + "5", 5 + "мм", 8 / Infinity, 9 * "\n9", null - 1, "5" - 2, "5px" - 3, true - 3, 7 || 0);


console.log('Задание 8:');

for (let j = 1; j < 11; j++) {
  if (j % 2 === 0) {
    console.log(j + 2);
  }
  else {
    console.log(j + 'мм');
  }
}


console.log('Задание 11:');
let days = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};
let arrDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let numberDay = prompt('Введите номер дня');
if (numberDay < 0 || numberDay > 7) {
  console.log('Некорректное число');
}
else {
  console.log(days[numberDay]);
  console.log(arrDays[numberDay - 1]);
}

console.log('Задание 10');
let outOne = prompt("Введите ваше имя:");
function outSrtring(outOne, outTwo = "Hello, ", outThree = " , how are you?") {
  return outTwo + outOne + outThree;
}
console.log(outSrtring(outOne));


console.log('Задание 11: ');
let firstSide = prompt('Введите первую сторону четырёхугольника: ');
let secondSide = prompt('Введите вторую сторону четырёхугольника: ');
firstSide = Number(firstSide); secondSide = Number(secondSide)
let params = function (firstSide, secondSide) {//Function Expression
  if (firstSide === secondSide) {
    return Math.pow(firstSide,2);
  }
  return firstSide*secondSide;
}
console.log(params(firstSide, secondSide));







