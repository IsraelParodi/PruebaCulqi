import { validateTokenCreation } from "src/utils/utils";
import { TokenService } from "../services/token";
import * as tokenMock from "./token.mock";

describe("Create Token [POST]", () => {
  it("success", async () => {
    const expected = tokenMock.create;
    const result = await TokenService.createToken(expected);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(expected);
  });

  it("error", async () => {
    const expectedError = tokenMock.createError;
    const event = null;
    const { invalid } = await validateTokenCreation(event, expectedError);
    // const result = await TokenService.createToken(expectedError);
    expect(invalid).toBe(true);
  });
});

describe("Get Token [GET]", () => {
  it("success", async () => {
    const expected2 = tokenMock.create2;
    const result = await TokenService.createToken(expected2);

    const searchedToken = await TokenService.findOne(result.body.token);

    expect(searchedToken.cvv).toBeUndefined();
  });

  it("error", async () => {
    const wrongToken = tokenMock.wrongToken;
    const searchedToken = await TokenService.findOne(wrongToken);

    expect(searchedToken).toBeUndefined();
  });
});
