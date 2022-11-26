import {
  validBearerToken,
  validCardNumber,
  validCvv,
  validEmail,
  validExpirationMonth,
  validExpirationYear,
} from "./validations";

export const generateToken = () => {
  let text: string = "";
  let possible =
    "ABCDEFGHIkLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 16; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const validateTokenCreation = (event, objToken) => {
  if (
    !validBearerToken(
      event?.headers?.Authorization || process.env.Authorization
    )
  )
    return { message: "El PK no es válido", invalid: true };
  if (!validExpirationMonth(objToken.expiration_month))
    return { message: "El mes de expiración no es válido", invalid: true };
  if (!validExpirationYear(objToken.expiration_year))
    return { message: "El año de expiración no es válido", invalid: true };
  if (!validEmail(objToken.email))
    return { message: "El email no es válido", invalid: true };
  if (!validCvv(objToken.cvv))
    return { message: "El CVV no es válido", invalid: true };
  if (!validCardNumber(objToken.card_number))
    return { message: "El número de tarjeta no es válido", invalid: true };
  return { message: "", invalid: false };
};
