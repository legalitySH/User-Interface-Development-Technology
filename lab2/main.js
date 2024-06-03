function basicOperation(operation, value1, value2) {
    switch (operation) {

        case '+':
            {
                return value1 + value2;
            }
        case '-':
            {
                return value1 - value2;
            }
        case '*':
            {
                return value1 * value2;
            }
        case '/':
            {
                return value1 / value2;
            }
        default:
            {
                return undefined;
            }

    }
}

let result = basicOperation('+', 5, 10);

console.log("result : " + result);


function CubeSumOfNumber(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += Math.pow(i, 3);
    }

    return sum;
}

console.log("Sum of cube numbers:" + CubeSumOfNumber(4))


function AvangerValue(numbers) {
    let countOfElements = 0;
    let sumOfElemets = 0;
    numbers.forEach(element => {
        countOfElements++;
        sumOfElemets += element;
    });

    return sumOfElemets / countOfElements;
}

const arr = [2, 4, 6, 8, 10, 12];

console.log("Avanger value in arr :" + AvangerValue(arr))


function ReverseString(str) {
    let strLength = str.length;
    let resultStr = "";

    for (let i = strLength - 1; i >= 0; i--) {
        let charCode = str.charCodeAt(i);
        if ((charCode >= 48 && charCode <= 57) ||
            (charCode >= 1040 && charCode <= 1103) ||
            charCode === 1025 || charCode === 1105) {
            continue;
        }
        resultStr += str[i];
    }
    return resultStr;

}

console.log("Reverse string : " + ReverseString("JavaScr32323iptляляля"))

function RepeatString(str, times) {
    let resultStr = "";

    for (let i = 0; i < times; i++) {
        resultStr += str;
    }

    return resultStr;
}

console.log("Repeated string: " + RepeatString("BSTU", 10))

function ExcludeString(arr1, arr2) {
    let arr3 = [];
    let iter = 0;

    for (let i = 0; i < arr1.length; i++) {
        let flag = true;

        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] == arr2[k]) {
                flag = false;
                break; 
            }
        }

        if (flag) {
            arr3[iter] = arr1[i];
            iter++;
        }
    }

    return arr3
}

arr_1 = ["hello", "house", "cat", "typescript", "github"]

arr_2 = ["house", "cat"];

console.log("Exclude string: " + ExcludeString(arr_1, arr_2));
