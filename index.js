function isPalindrome(word) {
  // Write your algorithm here
  const mid = Math.floor(word.length / 2);
  const length = word.length - 1;
  for (let i = 0; i < mid; i++) {
    let j = length - i;
    if (word.charAt(i) !== word.charAt(j)) {
      return false;
    }
  }
  return true;
}
/* 
  Add your pseudocode here
  1. calculate the half of our word
  2. calculate the length of our word
  3. go through our word
  4. create another variable to go through our word but from the other direction
  5. compare the letters in the opposite parts 
  6. return false if we find 1 different letters
  7. return true if no different letters were found
  
*/

/*
  Add written explanation of your solution here

  how can we approach this 
  as you see we are comparing 
  0 with 5
  1 with 4
  2 with 3 
  we notice that 'i' is increasing as for 'j' decreasing as the relationship between that is the length - 'i'
  we compare bettwen the 2 letters as we go increasing 'i' which influence 'j' if they are not similar return false
  if we completed our comparision with no false return then return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("maddam"));
}

module.exports = isPalindrome;
