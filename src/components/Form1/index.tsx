import CheckBox from '../CheckBox';
import DropdownButton from '../DropdownButton';
import InputText from '../InputText';

interface IInputForm {
	activeInputText?: boolean;
	styleInput?: string;
	IInput?: Array<{
		name: string;
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
		checkboxName: string;
		id: string;
	}>;
	Function: (e: any) => void;
}
const Form1 = ({
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
						<InputText
							key={i}
							name={el.name}
							OnChange={(e: any) => Function(e)}
						/>
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
							OnClick={(e: any) => Function(e)}
						/>
					))}
				</div>
			) : (
				<></>
			)}
			{activeCheckbox ? (
				<div className={styleCheckbox}>
					{ICheckbox?.map((el, i) => (
						<CheckBox
							key={i}
							id={el.id}
							name={el.checkboxName}
							OnChange={(e: any) => Function(e)}
						/>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Form1;
