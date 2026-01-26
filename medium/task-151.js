/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(' ').filter(Boolean);;
  arr.reverse();
  return arr.join(' ');
};

const data = [
  {str: "the sky is blue"},
  {str: "  hello world  "},
  {str: "a good   example"},
]

data.forEach((item, index)=>{
  console.log( "Test #" + (index + 1) + ": " + reverseWords(item.str))
})