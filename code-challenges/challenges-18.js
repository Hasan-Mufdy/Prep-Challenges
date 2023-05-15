'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    // 1. string --> array of words // 2. retrieve the length of the middle word:
    let strArray = str.split(' ');
    return (strArray[Math.floor(strArray.length/2)].length);

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    // 1. convert str1 & str2 ---> arrays // 2. sort the arrays 
    // 3. **return to string to compare*** // 4. check if equal
    let wrd1 = str1.split('').sort().join('');
    let wrd2 = str2.split('').sort().join('');

    if(wrd1 === wrd2){
        return true;
    }
    else{
        return false;
    }

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let counter = 0;
    // first case: the number is in the array
    // second case: the number is not in the array

    
    for(let i = 0; i < arr.length; i++){
    // 1:
        if(arr[i] === int){
            return i;
            // counter = i;
        }
    // 2:
    // ** it can be the last element in arr
        else if(arr[i] < int && (i === arr.length - 1 || int < arr[i + 1])) {
            return i + 1;
            // counter = i + 1;
        }    
    }
    return counter;
    

}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };