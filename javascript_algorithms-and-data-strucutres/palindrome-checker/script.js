function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');

    // Compare and return result
    if (cleaned === reversed) {
      return "It's a palindrome!";
    } else {
      return "It's not a palindrome.";
    }
  }

  // Handle form submission
  document.getElementById('palindrome-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the page from reloading

    const inputText = document.getElementById('input-text').value;
    const result = isPalindrome(inputText);

    document.getElementById('result').textContent = result;
  })
  