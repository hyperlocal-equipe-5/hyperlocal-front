import { type Restaurant } from './restaurant';

export interface Role {
	id: string;
	name: string;
	restaurant: Restaurant;
	access: {
		id: string;
		createRestaurants: boolean;
		createUsers: boolean;
		createProducts: boolean;
		createCategories: boolean;
		createIngredients: boolean;
		createOrders: boolean;
		createRoles: boolean;
		createTables: boolean;
		readRestaurants: boolean;
		readUsers: boolean;
		readProducts: boolean;
		readCategories: boolean;
		readIngredients: boolean;
		readOrders: boolean;
		readRoles: boolean;
		readTables: boolean;
		updateRestaurants: boolean;
		updateUsers: boolean;
		updateProducts: boolean;
		updateCategories: boolean;
		updateIngredients: boolean;
		updateOrders: boolean;
		updateRoles: boolean;
		updateTables: boolean;
		deleteRestaurants: boolean;
		deleteUsers: boolean;
		deleteProducts: boolean;
		deleteCategories: boolean;
		deleteIngredients: boolean;
		deleteOrders: boolean;
		deleteRoles: boolean;
		deleteTables: boolean;
		defineAccess: boolean;
	};
	createdAt: string;
	updatedAt: string;
}
