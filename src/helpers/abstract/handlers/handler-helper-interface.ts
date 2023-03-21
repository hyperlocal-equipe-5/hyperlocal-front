export interface HandlerInterface {
	store: (item: string) => void;
	remove: () => void;
	get: () => string;
}
