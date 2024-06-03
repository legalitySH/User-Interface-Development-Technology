console.log("Задание #1");

function createPhoneNumber(numbers : number[]) : string
{
    if(numbers.length !== 10)
    {
        return 'Invalid argument';
    }
    const pattern : RegExp = /^\(\d{3}\) \d{3}-\d{4}$/;
    let phoneNumber : string = '(' + `${numbers.slice(0,3)}`.replace(/,/g, "") + ') '
        + `${numbers.splice(3,3)}`.replace(/,/g , "" )+ '-' +
       `${numbers.splice(3,4)}`.replace(/,/g , "");
    return pattern.test(phoneNumber) ? phoneNumber : 'Invalid argument';

}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));


console.log("\nЗадание #2");

class Challenge
{
    static Solution(number : number) : number
    {
        if(number < 0)
        {
            return 0;
        }
        else
        {
            let sum : number = 0;
            let current_number : number = 1;
            let numberList : number[] = [];
            while (current_number < number)
            {
                if(current_number % 3 == 0 || current_number % 5 == 0)
                {
                    sum += current_number;
                    numberList[numberList.length] = current_number;
                }
                current_number++;
            }
            console.log(numberList);
            return sum;
        }
    }
}

console.log("Тест с отрицательным числом(-1): " + Challenge.Solution(-1));
console.log("Тест с положительным числом(10): " + Challenge.Solution(10));

console.log("\nЗадание #3");

function rotateArray(numbers: number[], k: number): number[] {
    k = k % numbers.length;

    const reverse = (nums: number[], start: number, end: number): void => {
        while (start < end) {
            const temp = nums[start];
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

const nums : number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(nums, 3).toString());


console.log("Задание №4");

function findArrayMedians(nums1 : number[] , nums2: number[]) : number
{
    let concatArray = nums1.concat(nums2);

    const comparator = (item1 : number , item2 : number) : number =>
    {
        return item1 - item2;
    }

    concatArray.sort(comparator);

    if(concatArray.length % 2 !== 0)
    {
        const index : number = Math.floor(concatArray.length / 2);
        return concatArray[index];
    }
    else
    {
        const index : number = Math.floor(concatArray.length / 2);
        let firstValue : number = concatArray[index];
        let secondValue : number = concatArray[index + 1];
        return (firstValue + secondValue) / 2;
    }
}

console.log(findArrayMedians([1,2] , [3,4]));

