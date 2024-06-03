const arr = [1, [1, 2, [3, 4]], [2, 4]];


let flattenedArray = arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(Array.isArray(currentValue) ? currentValue.reduce((a, b) => a.concat(b), []) : currentValue);
}, []);

console.log(flattenedArray);





const student_arr = [
    {
        name: "Ivan",
        age: 16,
        groupId: 6
    }
    ,{
        name: "Kolya",
        age: 17,
        groupId: 6
    }
    ,{
        name: "Denis",
        age: 18,
        groupId: 4
    }
    ,{
        name: "Vlad",
        age: 19,
        groupId: 6
    }
    ,{
        name: "Misha",
        age : 19,
        groupId : 4
    }
    ,{
        name : "Kirill",
        age : 19,
        groupId: 6
    }
]

function StudentArr(student_arr) {
    let result_obj = {};
    student_arr.forEach(element => {
        if (element.age > 17) {
            if (!result_obj[element.groupId]) {
                result_obj[element.groupId] = [];
            }
            result_obj[element.groupId].push(element.name);
        }
    });

    return result_obj;
}



console.log(StudentArr(student_arr))


function differenceOfCodes(str)
{
    let total1 = ""

    for (let i = 0; i < str.length; i++) {
        total1 += str.charCodeAt(i);
    }

    total2 = total1.replaceAll("7", "1");

    return total1 - total2;
}

console.log(differenceOfCodes('ABC'))

function extend(...obj) {
    let newObj = {};
    for (let i = 0; i < obj.length; i++) {
        newObj = Object.assign(newObj, obj[i]);
    }

    return newObj;
}

console.log(extend({a: 1, b: 2}, {a: 2, b: 2, c: 4}, {a: 4, b:6, d:6}))

function createPyramid(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
 
  createPyramid(10);