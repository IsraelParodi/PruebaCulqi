import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { IToken } from "../../interfaces/IToken";
import { TokenService } from "../../services/token";
import { formatJSONResponseBadRequest } from "../../libs/api-gateway";
import { validBearerToken } from "../../utils/validations";

const getToken: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  if (
    !validBearerToken(
      event?.headers?.Authorization || process?.env?.Authorization
    )
  )
    return formatJSONResponseBadRequest({ message: "El PK no es válido" });
  validBearerToken(event.headers.Authorization);
  let tokenData: IToken = await TokenService.findOne(
    event.queryStringParameters.token
  );

  if (tokenData) {
    return formatJSONResponse({ message: "Token obtenido", input: tokenData });
  } else {
    return formatJSONResponseBadRequest({
      message: "El token ingresado no es válido",
    });
  }
};

export const main = middyfy(getToken);
