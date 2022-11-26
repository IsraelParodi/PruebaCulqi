export const validExpirationMonth = (month: string) => {
  return Number(month) < 1 || Number(month) > 12 || !Number(month)
    ? false
    : true;
};

export const validExpirationYear = (year: string) => {
  return Number(year) < new Date().getFullYear() ||
    Number(year) > new Date().getFullYear() + 5 ||
    !Number(year)
    ? false
    : true;
};

export const validEmail = (email: string) => {
  if (email.length < 5 || email.length > 100) return false;
  let regex = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;
  let validDomains = ["@gmail.com", "@hotmail.com", "@yahoo.es"];
  let isValid = false;
  for (let domain of validDomains) {
    if (email.includes(domain)) {
      return (isValid = true);
    }
  }
  return regex.test(email) && isValid ? true : false;
};

export const validCvv = (cvv: number) => {
  let regex = /^[0-9]*$/;
  return String(cvv).length > 4 ||
    String(cvv).length < 3 ||
    !regex.test(String(cvv))
    ? false
    : true;
};

export const validCardNumber = (card: string) => {
  if (card.length < 13 || card.length > 16) return false;
  const arr = (card + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  const lastDigit = arr.shift();
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};

export const validBearerToken = (token: string) => {
  if (token) {
    return token.includes("pk_test_LsRBKejzCOEEWOsw") ? true : false;
  }
};
