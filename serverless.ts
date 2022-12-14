import type { AWS } from "@serverless/typescript";

import createTokens from "@functions/create-tokens";
import getToken from "@functions/get-token";

const serverlessConfiguration: AWS = {
  service: "prueba-culqi-ts",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      MONGODB_URI:
        "mongodb+srv://admin:admin@cluster0.m0mie.mongodb.net/?retryWrites=true&w=majority",
      MONGODB_DATABASE: "culqi",
    },
  },
  // import the function via paths
  functions: { createTokens, getToken },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
