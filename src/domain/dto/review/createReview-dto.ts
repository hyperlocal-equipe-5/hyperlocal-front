export interface CreateReviewDto {
	stars: any;
	comment: string;
	responses: Array<{
		question: string;
		answer: string;
		stars: number;
	}>;
	user?: string;
	restaurant: string;
}
