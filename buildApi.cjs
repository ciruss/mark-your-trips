const { generateApi } = require('swagger-typescript-api');
const path = require('path');

const getSwaggerUrl = () => {
  const baseApiUrl = process.env.VITE_API_URL;
  const swaggerCustomUrl = process.env.SWAGGER_URL;

  if (!baseApiUrl && !swaggerCustomUrl) {
    return null;
  }

  if (swaggerCustomUrl) {
    return swaggerCustomUrl;
  }

  return `${baseApiUrl}/api-docs/swagger.json`;
}

const build = () => {
  const url = getSwaggerUrl();

  if (!url) {
    return;
  }

  generateApi({
    name: 'generatedApi.ts',
    output: path.resolve(process.cwd(), 'src', 'api'),
    url,
    httpClientType: 'axios',
    generateClient: true,
    generateRouteTypes: true,
    generateResponses: true,
    extractRequestParams: true,
    extractRequestBody: true,
    extractEnums: true,
    unwrapResponseData: true,
    singleHttpClient: true,
    extractingOptions: {
      requestBodySuffix: ['Payload', 'Body', 'Input'],
      requestParamsSuffix: ['Params'],
      responseBodySuffix: ['Data', 'Result', 'Output'],
      responseErrorSuffix: ['Error', 'Fail', 'Fails', 'ErrorData', 'HttpError', 'BadResponse'],
    },
    primitiveTypeConstructs: (constructs) => ({
      ...constructs,
      // @ts-ignore
      string: {
        'date-time': 'Date',
      },
    }),
  })
}

build();
