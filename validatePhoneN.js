const validatePhoneNumber = (number) => {
  const str = number.toString();

  if (str.length === 10 && !str.includes("-")) {
    return true;
  } else if (str.length === 12 && str[4] === "-" && str[8] === "-") {
    return true;
  } else {
    return false;
  }
};

console.log(validatePhoneNumber(1234567890))