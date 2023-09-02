import axios from 'axios';
import { addInterceptors } from './interceptors';
// import { Api, HttpClient } from './generatedApi';

const { VITE_API_URL } = import.meta.env;

// COMMENT OUT IF YOU ARE GENERATING API DEFINITION FILES AUTOMATICALLY
// const httpClient = new HttpClient({
//   baseURL: VITE_API_URL,
// });
// addInterceptors(httpClient.instance);
// export const apiClient = new Api(httpClient);

// REMOVE IF YOU ARE GENERATING API DEFINITION FILES AUTOMATICALLY
export const client = axios.create({
  baseURL: VITE_API_URL,
});
addInterceptors(client);
