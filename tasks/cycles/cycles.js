/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;
  if (redemption > 0 && redemption <= 350) {
    discount = "0%";
  }
  else if (redemption > 350 && redemption <= 1350) {
    discount = "15%";
  }
  else if (redemption > 1350 && redemption <= 2700) {
    discount = "30%";
  }
  else {
    discount = "45%";
  }
   return discount;
}
console.log(calculateDiscount(500));

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
// USING FOR
  let factorial1 = 1;
  for (let x = 1; x <= 10; x++) {
    factorial1 *= x;
  }
  console.log(factorial1);
  
// USING WHILE
  let y = 1;
  let factorial2 = 1;

  while (y <= i) {
    factorial2 *= y;
    y++;
  }
  console.log(factorial2);
  
// USING DO..WHILE
  let z = 1;
  let factorial3 = 1;
  do {
    factorial3 *= z;
    z++;
  }
  while (z <= i)
  console.log(factorial3);
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let str = "";
  for (let i of substr) {
    str += i;
  }
  console.log(str);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  const values = Object.values(personIncomes);
     let sum = 0;
     for (let value of values) {
       sum += value;
     }
       console.log(sum);
}

module.exports = calculateDiscount;
