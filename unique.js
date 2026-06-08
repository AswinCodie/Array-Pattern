/*4. Print All Unique Elements in an Array
Print only the elements that appear exactly once in the array. */

const arr1=[1,2,3,3,4,2];
const uniqueNumbers = [...new Set(arr1)]; 
console.log(uniqueNumbers);