import { type Restaurant } from '../../../domain/entities/restaurant';

export function makeRestaurantStub(id = '3xn28n9e283r23'): Restaurant {
	return {
		id,
		telephone: 234234,
		email: 'categoryStub@email.com',
		name: 'Category',
		address: 'Stub street, 300',
		logo: '4rn847nr27e2mu3,0e24,2',
		colorScheme: 1,
		createdAt: '',
		updatedAt: '',
	};
}
