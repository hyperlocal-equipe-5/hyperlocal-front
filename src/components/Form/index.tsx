import CheckBox from '../CheckBox';
import InputText from '../InputText';

interface IInput {
	activeInputText?: boolean;
	Input?: Array<{
		name: string;
		InputText: (e: any) => void;
	}>;
	activeSelection?: boolean;
	activeCheckbox?: boolean;
	ICheckbox?: Array<{
		checkboxName: string;
		id: string;
		Checkbox: (e: any) => void;
	}>;
}

const Form1 = ({
	Input,
	ICheckbox,
	activeInputText,
	activeCheckbox,
	activeSelection,
}: IInput) => {
	return (
		<div className="flex flex-col w-11/12 h-5/6">
			{activeInputText ? (
				Input?.map((el, i) => (
					<InputText
						key={i}
						name={el.name}
						OnChange={(e: any) => el.InputText(e)}
					/>
				))
			) : (
				<></>
			)}
			{activeSelection ? <></> : <></>}
			{activeCheckbox ? (
				ICheckbox?.map((el, i) => (
					<CheckBox
						key={i}
						id={el.id}
						name={el.checkboxName}
						OnChange={(e: any) => el.Checkbox(e)}
					/>
				))
			) : (
				<></>
			)}
		</div>
	);
};

export default Form1;
