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


// 27. Remove Element (easy)

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
  
  //  31. Next Permutation (medium)
//   A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// SOLUTION => 
  var nextPermutation = function(nums) {
    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
        j--;
      }
  
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    reverse(nums, i + 1);
  }
  
  function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // 33. Search in Rotated Sorted Array (medium)
  // There is an integer array nums sorted in ascending order (with distinct values).
  // Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
  // Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
  // You must write an algorithm with O(log n) runtime complexity.

  //  Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// SOLUTION => 
  var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(nums[mid] === target) return mid;

      if(nums[left] <= nums[mid]){
        if(nums[left] <= target && target < nums[mid]){
          right = mid-1;
        }else{
          left = mid+1;
        }
      }else{
        if(nums[mid] < target && target <= nums[right]){
          left = mid+1;
        }else{
          right = mid-1;
        }
      }
    }
    return -1;
  }

//   34. Find First and Last Position of Element in Sorted Array (medium) 
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// SOLUTION => 
  var searchRange = function(nums, target) {
    const findPosition = (findFirst) => {
      let left = 0;
      let right = nums.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
  
        if (nums[mid] === target) {
          result = mid;
          if (findFirst) {
            // search on the left side
            right = mid - 1;
          } else {
            // search on the right side
            left = mid + 1;
          }
        } else if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    };
  
    let start = findPosition(true);  // find first occurrence
    let end = findPosition(false);   // find last occurrence
  
    return [start, end];
  }

  // 35. Search Insert Position (easy)
//   Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2 

// SOLUTION => 
  var searchInsert = function(nums, target) {
    let left = 0;
    let right  = nums.length-1;
    while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(nums[mid] === target)return mid;
      if(nums[mid] < target){
        left = mid+1;
      }else{
        right = mid-1;
      }
    }
    return left;
  }

  console.log(searchInsert([1,3,5,6], 5));

  // 36. Valid Sudoku (medium)

//   Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// SOLUTION => 
  var isValidSudoku = function(board) {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

    for(let i = 0; i< 9; i++){
      for(let j = 0; j< 9; j++){
        const num = board[i][j];
        if(num !== '.'){
          const boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
          if(rows[i][num] || cols[j][num] || boxes[boxIndex][num]) return false;
          rows[i][num] = true;
          cols[j][num] = true;
          boxes[boxIndex][num] = true;
        }
      }
    }
    return true;
  }

  console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));

  

// 37. Sudoku Solver (very hard)
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// SOLUTION => 
  var solveSudoku = function(board) {
    const solve = () => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (board[i][j] === '.') {
            for (let num = 1; num <= 9; num++) {
              const char = num.toString();
              if (isValid(i, j, char)) {
                board[i][j] = char;
                if (solve()) return true;
                board[i][j] = '.'; 
              }
            }
            return false; 
          }
        }
      }
      return true; 
    }
    const isValid = (row, col, char) => {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === char || board[i][col] === char) return false;
      }
  
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === char) return false;
        }
      }
      return true;
    }
    solve();
  };
  

  console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));


//   39. Combination Sum (medium)
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// SOLUTION => 
  var combinationSum = function(candidates, target) {
    const result = [];
    const backtrack = (start, target, current) => {
      if(target === 0){
        result.push([...current]);
      }
      if(target < 0) return;
      for(let i = start; i< candidates.length; i++){
        current.push(candidates[i]);
        backtrack(i, target - candidates[i], current);
        current.pop();
      }
    }
    backtrack(0, target, []);
    return result;
  }

  console.log(combinationSum([2,3,6,7], 7));

  
                                                  // the1person1of1future
                                                  // the1person1of1future
                                                  // Rank
                                                  // 3,174,835

// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// SOLUTION => 
  var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
  const results = [];

  function backtrack(start, path, total) {
    if (total === target) {
      results.push([...path]);
      return;
    }
    if (total > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      backtrack(i + 1, path, total + candidates[i]);
    }
  }

  backtrack(0, [], 0);
  return results;
  };

  console.log(combinationSum2([10,1,2,7,6,1,5], 8));

//   41. First Missing Positive
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// SOLUTION => 
  var firstMissingPositive = function(nums) {
    const n = nums.length;
    for(let i = 0; i< n; i++){
      while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]){
        [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
      }
    }
    for(let i = 0; i< n; i++){
      if(nums[i] !== i+1) return i+1;
    }
    return n+1;
  }

  console.log(firstMissingPositive([1,2,0]));
  console.log(firstMissingPositive([3,4,-1,1]));