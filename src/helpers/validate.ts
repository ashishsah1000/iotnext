export function validateString(inputString: string) {
  // Check if the string has spaces
  if (inputString.includes(" ")) {
    return "Name should not contain spaces.";
  }

  // Check if the string has special characters
  if (/[^a-zA-Z0-9]/.test(inputString)) {
    return "Name should not contain special characters.";
  }

  // Check if the string has capital letters
  if (inputString.length == 0) {
    return "Please enter a valid name";
  }

  // Check if the string has more than 20 characters
  if (inputString.length > 20) {
    return "Name length should be less than or equal to 20 characters.";
  }

  // If all checks pass, the string is valid
  return "";
}
