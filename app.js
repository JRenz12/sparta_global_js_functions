// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply() {
  var result = 3 * 2;
  return (result);

}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree() {
  var result = 7 + 234 + 9;
  return (result);
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(a, b){
  var small = Math.min(a, b);
  return(small);
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree() {
  var a = Math.max(3, 2, 8);
  return (a);
}

// 5. Write a function called 'reverseString' that returns the reverse a string
var rName = "markson";
function reverseString(rName) {
  return rName.split('').reverse().join('');

}
// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
var name = "markson";

function disemvowel(name) {
  return name.replace(/[aeiou]/gi, '');
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
var arr = [3, 12, 9, 7, 10];

function removeOdd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 1) {
      arr.splice(i, 1);
      i = i - 1;
    }
  }
  return (arr);
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array
var arr1 = [12, 3, 9, 7, 10];

function removeEven() {
  for (var i = 0; i < arr1.length; i++) {
    if ((arr1[i] % 2) == 0) {
      arr1.splice(i, 1);
      i = i - 1;
    }
  }
  return (arr1);
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
var arr2 = ["hello", "goodbye"];

function longestString(arr) {
  var longest = arr2.reduce(function(a, b) {
    return a.length > b.length ? a : b
  }, '');

return(longest);

}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
var arr3 = [3, 9, 7, 10, 12];
function allElementsExceptFirstThree() {
  arr3.splice(0,3); // AT POSITION 0 REMOVE 3
  return(arr3)

}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}


// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
