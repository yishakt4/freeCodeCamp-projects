const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu"
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      text: "What you do speaks so loudly that I cannot hear what you say.",
      author: "Ralph Waldo Emerson"
    }
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById("text").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
  
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`
    )}`;
    document.getElementById("tweet-quote").href = tweetLink;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayQuote();
  
    document.getElementById("new-quote").addEventListener("click", () => {
      displayQuote();
    });
  });
  