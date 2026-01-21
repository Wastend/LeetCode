/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = 0;

  if(!dividend) return 0
  if(!divisor) result = "No No No"
  if(divisor === 1) result = dividend
  if(divisor === -1) result = -dividend
  if(dividend === divisor) result = 1
  if(dividend === -divisor) result = -1

  if(result > 2147483647)
    return 2147483647
  if (result < -2147483648)
    return -2147483648
  if (result !== 0)
    return result

  let signPos = true

  if(dividend < 0 && divisor > 0){
    dividend = -dividend
    signPos = false
  } else if(divisor < 0 && dividend > 0) {
    divisor = -divisor
    signPos = false
  } else if(divisor < 0 && dividend < 0) {
    dividend = -dividend
    divisor = -divisor
  }

  while (dividend >= divisor) {
    let sum = divisor;
    let count = 1;

    while (dividend >= sum + sum) {
      sum += sum;
      count += count;
    }

    dividend -= sum;
    result += count;
  }

  result = signPos ? result : -result;

  if(result > 2147483647)
    return 2147483647
  if (result < -2147483648)
    return -2147483648

  return result
};

const data = [
  // {dividend: 1, divisor: 1},
  // {dividend: 1, divisor: -1},
  // {dividend: 10, divisor: 3},
  // {dividend: 7, divisor: -3},
  // {dividend: -2147483648, divisor: -1},
  // {dividend: 2, divisor: 2},
  // {dividend: 2, divisor: -2},
  {dividend: -10, divisor: -2},
  // {dividend: -2147483648, divisor: 4},
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + divide(item.dividend, item.divisor))
})