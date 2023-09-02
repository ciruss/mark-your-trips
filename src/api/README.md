# API folder

This folder contains all the definitions of api calls.

File `interceptors.ts` define interceptors required for appending the Bearer token, and should be reconfigured based on needs.

If you are using automatically generated api definition from swagger, make sure you comment out the `apiClient` implementation in `baseAxios.ts` and comment/remove the regular `client`.
