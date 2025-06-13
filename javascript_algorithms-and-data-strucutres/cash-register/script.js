function intToRoman(num) {
    if (num <= 0) return "Roman numerals do not support zero or negative numbers.";
    if (num > 3999) return "This converter supports numbers only up to 3999.";

    const romanMap = [
      { value: 100, symbol: "One Hundred Dollars" },
      { value: 20, symbol: "Twenty Dollars" },
      { value: 10, symbol: "Ten Dollars" },
      { value: 5, symbol: "Five Dollars" },
      { value: 1, symbol: "Dollar" },
      { value: 0.25, symbol: "Quarter" },
      { value: 0.1, symbol: "Dime" },
      { value: 0.05, symbol: "Nickel" },
      { value: 0.01, symbol: "Penny" }
    ];
