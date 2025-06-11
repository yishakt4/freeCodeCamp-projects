function userInput(text) {
    // Remove non-numeric characters
    let cleaned = text.replace(/[^0-9]/g, '');

    // Check if the cleaned input is a valid phone number
    if (/^\d{10}$/.test(cleaned)) {
        return "Valid phone number!";
    } else {
        return "Invalid phone number.";
    }
}