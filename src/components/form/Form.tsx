import { useState } from 'react';

import './form.scss';

interface Props {
	title: string;
	buttons: Array<{
		name: string;
		type: ButonType;
		color: string;
	}>;
	fields: Array<{
		label: string;
		inputType: string;
		placeholder: string;
	}>;
	callbackFunction: (body: any, buttonName: string) => void;
}
enum ButonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

export function Form({ buttons, fields, title, callbackFunction }: Props) {
	const [state, setstate] = useState<any>();

	function handleClick(buttonName: string) {
		callbackFunction(state, buttonName);
	}
	return (
		<form className="form">
			<div className="input">
				<h2>{title}</h2>
				<div className="label">
					{fields.map((item, index) => (
						<div key={index}>
							<label>{item.label}</label>
							<input
								type={item.inputType}
								placeholder={item.placeholder}
								onChange={event => {
									setstate({ ...state, [item.label]: event.target.value });
								}}
							/>
						</div>
					))}
				</div>
				<div className="button">
					{buttons.map((item, index) => (
						<button
							key={index}
							style={{ backgroundColor: item.color }}
							type={item.type}
							onClick={() => {
								handleClick(item.name);
							}}>
							{item.name}
						</button>
					))}
				</div>
			</div>
		</form>
	);
}
