import { type InputType } from '../InputTypes';

export interface InputDto {
	activeInputText?: boolean;
	styleInput?: string;
	Input?: Array<{
		name: string;
		typeInput?: InputType;
		required?: boolean;
	}>;

	activeSelection?: boolean;
	styleSelection?: string;
	Selection?: Array<{
		name: string;
		selections: {
			names: Array<{
				name: string;
				id: string;
			}>;
			addLink?: boolean;
			link?: string;
			nameLink?: string;
		};
	}>;

	activeCheckbox?: boolean;
	styleCheckbox?: string;
	Checkbox?: Array<{
		name: string;
		id: string;
		help?: boolean;
		textHelp?: string;
	}>;
}
