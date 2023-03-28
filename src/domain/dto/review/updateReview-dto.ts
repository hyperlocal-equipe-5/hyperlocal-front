export interface UpdateReviewDto {
	stars: any;
	comment: any;
	id: string;
	restaurant: string;
	responses: Array<{
		id: string;
		question: string;
		answer: string;
		stars: number;
	}>;
	user?: string;
}
