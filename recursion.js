/** product: calculate the product of an array of numbers. */

function product(nums) {
  // if base case is empty, return 1 (multiplicative identity)
  if (nums.length === 0) return 1;

  // recursive case: compare first word lengh to the longest in the rest 
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case, if array is empty return 0
  if (words.length === 0) return 0;

  // recursive case: compare the first word length to the longest in the rest. 
  return Math.max(words[0].length, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // base case: If the string is empty, return an empty string. 
  if (str.length === 0) return '';

  // recursive case: take first char and add result of everyOther for the rest (skipping one character)
  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base case: if the string length is 0 or 1, its a palindrome
  if (str.length <= 1) return true;

  // recursive case: check first and last characters. then check inner substring
  if (str[0] !== str[str.length -1]) return false;

  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  // base case: if array is empty return -1. 
  if (arr.length === 0) return -1; 

  // if first element mattches the value, return current index
  if (arr[0] === val) return idx;

  // recursive case: continue searching in rest of array. 
  return findIndex(arr.slice(1), val, idx + 1)

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case: if string is empty, return an empty string.
  if(str.length === 0) return '';

  // recursive-case: return last char plus the rever of remaining string. 
  return str[str.length-1] + revString(str.slice(0, -1));

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      strings = strings.concat(gatherStrings(obj[key])); 
    }
  }

  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length-1) {
  // divide and conquer method to recursively search for the value. 
  // base-case: if low index exceeds high, value isnt found.
  if (low > high) return -1;

  // calculate middle index
  let mid = Math.floor((low + high) / 2);

  // if value is found, return the index. 
  if (arr[mid] === val) return mid;

  // if value is smaller than midde value, search in left half.
  if (val < arr[mid]) {
    return binarySearch(arr, val, low, mid-1);
  }

  // if value is larger than middle value, search right half
  return binarySearch(arr, val, mid + 1, high); 

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
