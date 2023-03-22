import Help from '../../style/Help';
import { type InputDto } from '../../types/Dto/InputDto';
import DropdownButton from '../DropdownButton';

interface InputForm {
	Input: InputDto;
	Function: (e: any, field: string) => void;
}

const Form = ({ Input, Function }: InputForm) => {
	return (
		<div className="flex flex-col w-11/12 h-5/6">
			{Input.activeInputText ? (
				<div className={Input.styleInput}>
					{Input.Input?.map((el, i) => (
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
			{Input.activeSelection ? (
				<div className={Input.styleSelection}>
					{Input.Selection?.map((el, i) => (
						<div key={i}>
							<h1 className="text-details py-3 text-2xl font-semibold">
								{el.name}
							</h1>
							<DropdownButton
								names={el.selections.names}
								addLink={el.selections.addLink}
								link={el.selections.link}
								nameLink={el.selections.nameLink}
								OnClick={(e: any) => Function(e, el.name)}
							/>
						</div>
					))}
				</div>
			) : (
				<></>
			)}
			{Input.activeCheckbox ? (
				<div className={Input.styleCheckbox}>
					{Input.Checkbox?.map((el, i) => (
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
							{el.help ? <Help>{el.textHelp}</Help> : ''}
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
