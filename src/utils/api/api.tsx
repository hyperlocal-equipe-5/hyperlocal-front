import { type CreateUserRequest, type LoginRequest } from '../types/request';

import axios from 'axios';

axios.defaults.baseURL = 'URL-API';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
	function (config: any) {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	},
	async function (error) {
		return await Promise.reject(error);
	},
);

axios.interceptors.response.use(
	function (config) {
		return config;
	},
	function (error) {
		console.log('Error Axios', error.response);
		// if (error.response.status === 401) {
		//     if (localStorage.getItem('token')) localStorage.removeItem('token');
		// }
	},
);

export const api = {
	login: async ({ email, password }: LoginRequest) => {
		try {
			const response = await axios.post('/rota', { email, password });
			// console.log(response.data.access_token);
			localStorage.setItem('token', response.data.token);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},

	createNewUser: async (payload: CreateUserRequest) => {
		try {
			const response = await axios.post('/user', payload);
			return response.data;
		} catch (err) {
			alert(err);
		}
	},
};
