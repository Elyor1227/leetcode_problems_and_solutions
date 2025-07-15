// First problems with Arrays

//  11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.   Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// SOLUTION => 
    var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left<right){
        const h = Math.min(height[left], height[right]);
        const w = right- left;
        const area = h*w;
        maxArea = Math.max(maxArea, area);

        if(height[left]< height[right]){
            left++;
        } else{
            right--;
        }
    }
    return maxArea;
};



// 14. Longest Common Prefix (easy)

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// SOLUTION => 
    var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';

    let prefix = strs[0];
    for (let i = 1; i< strs.length; i++) { 
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if(!prefix) return '';
        }
    }
    return prefix;
};


// 15. 3Sum 

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// SOLUTION => 
    var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a-b);
    for(let i = 0; i<=nums.length-2; i++){
        if(i> 0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;

        while(left< right){
            const sum = nums[i] + nums[left] + nums[right];

            if(sum===0){
                result.push([nums[i], nums[left], nums[right]]);
                while(left< right && nums[left] === nums[left+1]) left++;
                while(left< right && nums[right] === nums[right-1]) right--;

                left++;
                right--;
            }else if(sum<0) {
                left++;
            }else{
                right--
            }
        }
    }
    return result
};

// 16. 3Sum Closest (easy)

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

//  SOLUTION => 
    function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2]; 

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closest;
}


// 4Sum (easy)

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// SOLUTION => 
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
  
    const n = nums.length;  
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; 
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue; 
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
  
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
  
            left++;
            right--;
          } else if (sum < target) {
            left++; 
          } else {
            right--;
          }
        }
      }
    }
  return result;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));


// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.
// int k = removeElement(nums, val); // Calls your implementation
// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

//SOLUTION => 
  var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
  }
  