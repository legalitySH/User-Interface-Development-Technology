console.log("Задание #1");
function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        return 'Invalid argument';
    }
    var pattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    var phoneNumber = '(' + "".concat(numbers.slice(0, 3)).replace(/,/g, "") + ') '
        + "".concat(numbers.splice(3, 3)).replace(/,/g, "") + '-' +
        "".concat(numbers.splice(3, 4)).replace(/,/g, "");
    return pattern.test(phoneNumber) ? phoneNumber : 'Invalid argument';
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log("\nЗадание #2");
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.Solution = function (number) {
        if (number < 0) {
            return 0;
        }
        else {
            var sum = 0;
            var current_number = 1;
            var numberList = [];
            while (current_number < number) {
                if (current_number % 3 == 0 || current_number % 5 == 0) {
                    sum += current_number;
                    numberList[numberList.length] = current_number;
                }
                current_number++;
            }
            console.log(numberList);
            return sum;
        }
    };
    return Challenge;
}());
console.log("Тест с отрицательным числом(-1): " + Challenge.Solution(-1));
console.log("Тест с положительным числом(10): " + Challenge.Solution(10));
console.log("\nЗадание #3");
function rotateArray(numbers, k) {
    k = k % numbers.length;
    var reverse = function (nums, start, end) {
        while (start < end) {
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    };
    reverse(numbers, 0, numbers.length - 1);
    reverse(numbers, 0, k - 1);
    reverse(numbers, k, numbers.length - 1);
    return numbers;
}
var nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(nums, 3).toString());
console.log("Задание №4");
function findArrayMedians(nums1, nums2) {
    var concatArray = nums1.concat(nums2);
    var comparator = function (item1, item2) {
        return item1 - item2;
    };
    concatArray.sort(comparator);
    if (concatArray.length % 2 !== 0) {
        var index = Math.floor(concatArray.length / 2);
        return concatArray[index];
    }
    else {
        var index = Math.floor(concatArray.length / 2);
        var firstValue = concatArray[index];
        var secondValue = concatArray[index + 1];
        return (firstValue + secondValue) / 2;
    }
}
console.log(findArrayMedians([1, 2], [3, 4]));
