// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.


// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]


// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Использован алгоритм "Cyclic sort"

function findDisappearedNumbers(nums: number[]): number[] {
    console.log(nums)
    let i = 0; 
    while (i < nums.length) {
        const position = nums[i] - 1;
        if (nums[position] !== nums[i]){
            const temp = nums[position];
            nums[position] = nums[i];
            nums[i] = temp;
        } else {
            i++
        }
    }
    console.log(nums)
   const disappearedNumbers = [];

   for (let i = 0; i < nums.length; i++) {
       if(nums[i] !== i+1){
           disappearedNumbers.push(i+1)
       }
   }

    return disappearedNumbers;
};


console.log(findDisappearedNumbers([1, 1]).join('') === [2].join(''));

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]).join('') === [5, 6].join(''));
