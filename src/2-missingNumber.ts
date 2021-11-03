// Пример 1:

// Ввод: nums = [3,0,1]
//  Вывод: 2
//  Объяснение : n = 3, так как есть 3 числа, поэтому все числа находятся в диапазоне [0,3]. 2 - это отсутствующее число в диапазоне, поскольку оно не отображается в числах.
// Пример 2:

// Ввод: nums = [0,1]
//  Вывод: 2
//  Объяснение : n = 2, так как есть 2 числа, поэтому все числа находятся в диапазоне [0,2]. 2 - это отсутствующее число в диапазоне, поскольку оно не отображается в числах.
// Пример 3:

// Ввод: nums = [9,6,4,2,3,5,7,0,1]
//  Вывод: 8
//  Объяснение : n = 9, так как имеется 9 чисел, поэтому все числа находятся в диапазоне [0,9]. 8 - это отсутствующее число в диапазоне, поскольку оно не отображается в числах.
// Пример 4:

// Ввод: nums = [0]
//  Вывод: 1
//  Объяснение : n = 1, поскольку существует 1 число, поэтому все числа находятся в диапазоне [0,1]. 1 - это отсутствующее число в диапазоне, поскольку оно не отображается в числах.

// 3*(3+1)/2 - 


// function missingNumber(nums: number[]): number {

//     for (let i = 0; i <=  nums.length; i++) {
//         if(!nums.includes(i)){
//             return i;
//         }
//     }
// };

function missingNumber(nums: number[]): number {

    const n = nums.length;
    let sum = 0;
    for (let i = 0; i <  nums.length; i++) {
       sum += nums[i];
    }

    return  n*(n+1)/2 - sum;
    
};

console.log(missingNumber([1,2,0])===3);
console.log(missingNumber([0])===1);
console.log(missingNumber([0,1])===2);