'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion

// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]

// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    // write your code here
    let arr = [int1];
    
    let addToArray = (n1, n2) => {
        if(n1 <= 0){
            arr.push(n1);
            return;
        }

        arr.push(n1);
        addToArray(n1 - n2, n2);
        arr.push(n1);
        // arr.push(int1);
    }

    addToArray(int1 - int2, int2);
    arr.push(int1);

    return arr;
    
/////////////////////////////////////////////////////////////////////////

    // another idea:

    // we want to call the following 2 lines only 1 time(we have to add another 2 functions)
    // let arr1 = [];
    // let arr2 = [];
    // let lastInt1Number = 0;

    // function(1) will add numbers from int1 to anything below zero to arr1
    // function(2) will add numbers from the number we reached before in arr1 to int1

    // fun1(int1, int2)
    // fun2(lastInt1Number, int2)
    
    // function fun1(n1, n2){
    //     if(n1 > -n2){
    //         return [n1].concat(
    //             (fun1(n1-n2, n2))    
    //         );
    //     }
    //     else{
    //         return;
    //     }
    // }
    // function fun2(n1, n2){
    //     if(n1 <= -n2){
    //         return [n1].concat(
    //             (fun2(n1+n2, n2))
    //         );
    //     }
    //     else{
    //         return;
    //     }
    // }
    // return arr1.concat(arr2);    
///////////////////////////////////////////////////////////////////////////////////
      console.log(recursionPattern(16, 5)); // Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
      console.log(recursionPattern(50, 9)); // Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
      
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    let link = /(http?:\/\/[^\s]+(\.(com|org|net)))/g;
    let result = str.match(link).join().slice(7);
    return result;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    // 1. remove everything exept for letters (it will also remove spaces):
    // 2. use toLowerCase function
    let strToCheck = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // return strToCheck;
    // 3. to reverse it: convert to array // reverse // convert to string
    let strToCheckBackward = strToCheck.split('').reverse().join('');
    // 4. now we can check if palindrome
    if(strToCheck === strToCheckBackward){
        return true;
    }
    else{
        return false;
    }

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };