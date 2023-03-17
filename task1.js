const stringLength = (string) => {
  if(string.length < 1 || string.length > 10) {
    throw new Error('string length must be between 1 and 10 characters long')
  }
  let count = 0;
  for (let i = 0; i < string.length; i +=1) {
    count ++;
  }
  return count;
}

module.exports = stringLength;