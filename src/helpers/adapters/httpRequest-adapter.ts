import axios from 'axios';
import { type HttpRequestAdapterInterface } from '../abstract/adapters/httpRequest-adapter-interface';

export class HttpRequestAdapter implements HttpRequestAdapterInterface {
	public async post(
		url: string,
		body: any,
		authorizationHeader = '',
	): Promise<any> {
		try {
			const response = await axios.post(url, body, {
				headers: {
					Authorization: authorizationHeader,
				},
			});
			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	}

	public async patch(
		url: string,
		body: any,
		authorizationHeader = '',
	): Promise<any> {
		try {
			const response = await axios.patch(url, body, {
				headers: {
					Authorization: authorizationHeader,
				},
			});
			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	}

	public async get(url: string, authorizationHeader = ''): Promise<any> {
		try {
			const response = await axios.get(url, {
				headers: {
					Authorization: authorizationHeader,
				},
			});
			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	}

	public async delete(url: string, authorizationHeader = ''): Promise<any> {
		try {
			const response = await axios.delete(url, {
				headers: {
					Authorization: authorizationHeader,
				},
			});
			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	}
}
