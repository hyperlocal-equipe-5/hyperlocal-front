import { type InputType } from '../../types/InputTypes';
import DropdownButton from '../DropdownButton';

interface IInputForm {
	activeInputText?: boolean;
	styleInput?: string;
	IInput?: Array<{
		name: string;
		typeInput: InputType;
		required?: boolean;
	}>;

	activeSelection?: boolean;
	styleSelection?: string;
	ISelection?: Array<{
		name: string;
		selections: string[];
	}>;
	activeCheckbox?: boolean;
	styleCheckbox?: string;
	ICheckbox?: Array<{
		name: string;
		id: string;
	}>;
	Function: (e: any, field: string) => void;
}
const Form = ({
	IInput,
	ICheckbox,
	ISelection,
	styleInput,
	styleCheckbox,
	styleSelection,
	activeInputText,
	activeCheckbox,
	activeSelection,
	Function,
}: IInputForm) => {
	return (
		<div className="flex flex-col w-11/12 h-5/6">
			{activeInputText ? (
				<div className={styleInput}>
					{IInput?.map((el, i) => (
						<div key={i} className="flex flex-col">
							<h1 className="text-details py-3 text-2xl font-semibold">
								{el.name}
							</h1>
							{el.required ? (
								<input
									onChange={(e: any) => Function(e, el.name)}
									type={el.typeInput}
									required
									className="bg-white h-8 w-full rounded-xl text-bg px-2"
									placeholder={`Criar um novo ${el.name}`}
								/>
							) : (
								<input
									onChange={(e: any) => Function(e, el.name)}
									type={el.typeInput}
									className="bg-white h-8 w-full rounded-xl text-bg px-2"
									placeholder={`Criar um novo ${el.name}`}
								/>
							)}
						</div>
					))}
				</div>
			) : (
				<></>
			)}
			{activeSelection ? (
				<div className={styleSelection}>
					{ISelection?.map((el, i) => (
						<DropdownButton
							key={i}
							text={el.name}
							names={el.selections}
							OnClick={(e: any) => Function(e, el.name)}
						/>
					))}
				</div>
			) : (
				<></>
			)}
			{activeCheckbox ? (
				<div className={styleCheckbox}>
					{ICheckbox?.map((el, i) => (
						<div key={i} className="flex flex-row items-center">
							<input
								onChange={e => Function(e, el.name)}
								className="h-5 w-5 checked:bg-details"
								type="checkbox"
								id={el.id}
								value={el.name}
							/>
							<label
								className="pl-2 text-2xl text-textColor capitalize font-semibold mobile:text-base"
								htmlFor={el.id}>
								{el.name}
							</label>
						</div>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Form;
