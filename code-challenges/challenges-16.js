'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    //  1. string --> array/ 2. reverse/ 3. array --> string:
    let reversedArray = string.split('').reverse().join('');
    return reversedArray;

}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let resArray = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] && arr[i].includes('^_^')){
            resArray.push(arr[i]);
        }
    }
    return resArray;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    //  1. string --> array/ 2. push to resArray / 3. return array --> string:
    let resArray = [];
    let strArray = str.split('');
    for(let i = 0; i < strArray.length; i++){
        if(i === 0 || i%2 === 0){
            resArray.push(strArray[i]);
        }
    }
    return resArray.join('');

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...

    // 1. loop through the input array/ 2. loop through inner arrays/ 3. check ((strings)) and push ((array)) to resArray
    let resArray = [];
    let output = [];
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr[i].length; k++){
            if(arr[i][k].includes("chicken")){
                resArray.push(arr[i][k]);
            }
        }
    }
    // to push resArray elements to new arrays:
    output = resArray.map(item => [item]); 
    return output;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
