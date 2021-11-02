// Ограничения:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Вход: nums = [1,2,3,1]
//  Выход: true

//  Вход: nums = [1,2,3,4]
//  Выход: false

//  Вход: nums = [1,1,1,3,3,4,3,2,4,2]
//  Выход: true

const containsDuplicate = (nums: number[]): boolean => {

    const set = new Set<Number>()
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }

    return !(set.size === nums.length)
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
