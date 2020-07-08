/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str){
  if (typeof str !== "string"){
    return 'This is not a string!';
  } else {
    return str.split("").reverse().join(""); //update to do the code below in one line
    // str = str.split("");
    // str = str.reverse();
    // str = str.join("");
    // return str;
  }
}
console.log(reverseString("abcde"));
console.log(reverseString(12345));

/**
 * 1. Calculate a century by given year
 * if a number is passed
* @param {number} year
*/
function centuryFromYear(year) {
  if (typeof year !== "number") {
    return 'It is not a number';
  } 
  else
   {
      return Math.ceil(year/100);}
}
console.log(centuryFromYear("qwerty"));
console.log(centuryFromYear(5));
console.log(centuryFromYear(100));
console.log(centuryFromYear(1502));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(2020));

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
    const regex = new RegExp(char, 'g');
    const result = str.match(regex);
    return result ? result.length : 0;
  }
  console.log (strCount("makarevich", "a"));


/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
    return str.slice(0, num) + '...';
}
truncateString("Good morning", 10);

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  const regex = /10/g;
  return text.replace(regex,"ten");
}
console.log(replace10 ("8107104"));

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  const regex = /\[.*?\]/g;
  return text.replace (  regex, "[CONFIDENTIAL]")
}
console.log(replaceConfidential("lorem [ipsum] si dolor"));

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};