function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    let reversed = cleaned.split('').reverse().join('');
  
    // Compare and return result
    if (cleaned === reversed) {
      console.log("It's a palindrome!");
    } else {
      console.log("It's not a palindrome.");
    }
  }
  
  // Example usage
  isPalindrome("Racecar");       // It's a palindrome!
  isPalindrome("Hello, world");  // It's not a palindrome.
  