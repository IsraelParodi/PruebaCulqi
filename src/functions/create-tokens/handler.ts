import {
  formatJSONResponseBadRequest,
  ValidatedEventAPIGatewayProxyEvent,
} from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { generateToken, validateTokenCreation } from "../../utils/utils";
import { IToken } from "../../interfaces/IToken";
import { TokenService } from "../../services/token";

const createTokens: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  let objToken: IToken = Object.assign({}, event.body);
  objToken.token = generateToken();
  objToken.create_date = new Date();

  const { message, invalid } = await validateTokenCreation(event, objToken);
  if (invalid) return formatJSONResponseBadRequest({ message: message });

  await TokenService.createToken(objToken);

  return formatJSONResponse({
    message: `Token creado correctamente`,
    token: objToken.token,
  });
};

export const main = middyfy(createTokens);
