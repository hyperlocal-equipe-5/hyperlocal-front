export interface UpdateOrderDto {
	id: string;
	restaurant: string;
	finished?: boolean;
	products?: Array<{
		product: string;
		ingredientsAdded: Array<{
			ingredient: string;
			quantity: number;
		}>;
		ingredientsRemoved: Array<{
			ingredient: string;
			quantity: number;
		}>;
	}>;
	takeAway?: boolean;
	customerName?: string;
	user?: string;
	table?: string;
}
