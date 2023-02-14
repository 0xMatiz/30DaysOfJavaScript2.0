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
let sentenceOne = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceOne.indexOf('because'));
/* 18. Use lastIndexOf to find the position of the last 
occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a 
conjunction' */
console.log(sentenceOne.lastIndexOf('because'));
/* 19. Use search to find the position of the first occurrence 
of the word because in the following sentence:
'You cannot end a sentence with because because because is a 
conjunction' */
console.log(sentenceOne.search('because'));
/* 20. Use trim() to remove any trailing whitespace at the 
beginning and the end of a string.E.g ' 30 Days Of JavaScript '. */
console.log(' 30 Days Of JavaScript '.trim());
/* 21. Use startsWith() method with the string 30 Days Of 
JavaScript and make the result true */
console.log(challenge.startsWith('30'));
/* 22. Use endsWith() method with the string 30 Days Of 
JavaScript and make the result true */
console.log(challenge.endsWith('JavaScript'));
//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of '.concat('JavaScript'));
//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// -LEVEL 2 EXERCISES -
/* 1. Using console.log() print out the following statement: 
The quote 'There is no exercise better for the heart than 
reaching down and lifting people up.' by John Holmes teaches 
us to help one another. */
//Im making a 'let variable' so we dont have to write two times the long statement.
let statementTwo = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(statementTwo);
/* 2. Using console.log() print out the following quote by 
Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is 
about love. Charity and love are the same -- with charity you 
give love, so don't just give money but reach out your hand 
instead." */
const symbolOne = '--' //Make '--' able to be printed on the string
// Im making a 'let variable' so " "
let statementThree = `Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same ${symbolOne} with charity you give love, so don\'t just give money but reach out your hand instead.`
console.log(statementThree);
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10'));