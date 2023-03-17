import { type Restaurant } from './restaurant';
import { type Role } from './role';

export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	image?: string;
	cellphone?: number;
	role: Role;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
