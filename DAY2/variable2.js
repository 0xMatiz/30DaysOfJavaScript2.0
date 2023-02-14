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

// 3. Check if typeof'10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')); // '10' is not equal to 10, we're going to do some casting
let num = '10';
let numFloat = parseFloat(num);
console.log(numFloat); // Now '10' is equal to 10


//POINT 4 IS NOT FINISHED!!!
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.81')); // '9.8' is not equal to 10.
let numTwo = '9.81';
let numTwoFloat = parseFloat(numTwo);
let numTwoFloatInt = parseInt(numTwoFloat);
console.log(numTwoFloatInt); //I've couldnt make '9.8' equal to 10


//5. Check if 'on' is found in both python and jargon
const stringOne = 'python and jargon';
console.log(stringOne.endsWith('on'));

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentenceTwo = 'I hope this course is not full of jargon';
console.log(sentenceTwo.endsWith('jargon'));

//7. Generate a random number between 0 and 100 inclusively.
console.log(Math.random() * 101);


//EXERCISE 8 IS NOT FINISHED!!!
//8. Generate a random number between 50 and 100 inclusively.
console.log(Math.random() * 101); //Find how to use max and min.


//9. Generate a random number between 0 and 255 inclusively.
console.log(Math.random () * 256);


// EXERCISE 10 NOT FINISHED!
//10. Access the 'JavaScript' string characters using a random number.


//EXCERCISE 11 NOT FINISHED!
//11. Use console.log() and escape characters to print the following pattern.


// EXERCISE 12 NOT FINISHED!
// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'


/* -LEVEL 3 EXERCISES - ARE NOT FINISHED!!!

 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence. */
let sentenceThree = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentenceThree.match('love'));

//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceOne.match('because'));

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentenceFive = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(sentenceFive.split(' ')); //Split string into an array for making it possible to select numbers in an easy way.
console.log(sentenceFive[2, 8, 12]);


//DAY 2 FINISHED: ANYWAYS THERE ARE SOME EXERCISES THAT WERENT FINISHED.