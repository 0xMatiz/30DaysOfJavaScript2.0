/*30 DAYS OF JAVASCRIPT: DAY 2
- LEVEL 1 EXERCISES -
1. Declare 'challenge' variable.*/
const challenge = '30 Days Of JavaScript';
//2. Log 'challenge' variable into the console.
console.log(challenge);
//3. Print the length of the variable 'challenge' with a method.
console.log(challenge.length);
//4. Change all characters to upper case " ".
console.log(challenge.toUpperCase());
//5. Change all characters to lower case " ".
console.log(challenge.toLowerCase());
//6. Cut out the first two characters " ".
console.log(challenge.substring(3, 21));
//7. Slice out all the string from the variable " ".
console.log(challenge.substring(21));
//8. Check if the string contains a word 'Script' " ".
console.log(challenge.includes('Script'));
//9. Split the string into an array " ".
console.log(challenge.split());
//10. Split the string at the spaces " ".
console.log(challenge.split(' '));
/*11. Split 'Facebook, Google, Microsoft, Apple, IBM, Oracle, 
Amazon' using " . */
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));
//12. Change string to '30 Days Of Python " ".
console.log(challenge.replace('JavaScript', 'Python'));
/*13. What is the character code at index 15 
in '30 Days of JavaScript' " ". */
console.log(challenge.charCodeAt(15));
/* 14. What is the character code at character 'J' in 
'30 Days of JavaScript' " ". */
console.log(challenge.charCodeAt('J'));
/* 15. Use indexOf to determine the position of the first 
occurrence of a in 30 Days Of JavaScript. */
console.log(challenge.indexOf('a'));
/* 16. Use lastIndexOf to determine the position of the 
last occurrence of a in 30 Days Of JavaScript. */
console.log(challenge.lastIndexOf('a'));
/* 17. Use indexOf to find the position of the first occurrence
of the word because in the following sentence:
'You cannot end a sentence with because because because is a 
conjunction' */
let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence1.indexOf('because'));
/* 18. Use lastIndexOf to find the position of the last 
occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a 
conjunction' */
console.log(sentence1.lastIndexOf('because'));
/* 19. Use search to find the position of the first occurrence 
of the word because in the following sentence:
'You cannot end a sentence with because because because is a 
conjunction' */
console.log(sentence1.search('because'));
/* 20. Use trim() to remove any trailing whitespace at the 
beginning and the end of a string.E.g ' 30 Days Of JavaScript '. */
console.log(' 30 Days Of JavaScript '.trim());
/* 21. Use startsWith() method with the string 30 Days Of 
JavaScript and make the result true */
console.log(challenge.startsWith('30'));