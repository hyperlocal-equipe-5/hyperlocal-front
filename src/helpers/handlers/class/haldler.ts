import { type HandlerInterface } from '../../abstract/handlers/handler-helper-interface';

export class Handler implements HandlerInterface {
	protected readonly handlerName: string;

	public constructor(handlerName: string) {
		this.handlerName = handlerName;
	}

	public store(item: string): void {
		localStorage.setItem(this.handlerName, item);
	}

	public remove(): void {
		localStorage.removeItem(this.handlerName);
	}

	public get(): string {
		const item = localStorage.getItem(this.handlerName) ?? '';

		return item;
	}
}
