// import { useState } from 'react';

// import './form.scss';

// interface Props {
// 	title: string;
// 	titleSecundary?: string;
// 	buttons: Array<{
// 		name: string;
// 		type: ButonType;
// 		color: string;
// 	}>;
// 	fields: Array<{
// 		label: string;
// 		inputType: string;
// 		placeholder: string;
// 	}>;

// 	callbackFunction: (body: any, buttonName: string) => void;
// }
// enum ButonType {
// 	submit = 'submit',
// 	reset = 'reset',
// 	button = 'button',
// }

// export function Form({
// 	buttons,
// 	fields,
// 	title,
// 	titleSecundary,
// 	callbackFunction,
// }: Props) {
// 	const [state, setState] = useState<any>();

// 	function handleClick(buttonName: string) {
// 		callbackFunction(state, buttonName);
// 	}
// 	return (
// 		<form className="form">
// 			<div className="form-group">
// 				<h2>{title}</h2>
// 				<div className="label">
// 					{fields.map((item, index) => (
// 						<div key={index}>
// 							<label>{item.label}</label>
// 							<input
// 								type={item.inputType}
// 								placeholder={item.placeholder}
// 								onChange={event => {
// 									setState({ ...state, [item.label]: event.target.value });
// 								}}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 				<h4> {titleSecundary} </h4>
// 				<div className="button">
// 					{buttons.map((item, index) => (
// 						<button
// 							key={index}
// 							style={{ backgroundColor: item.color }}
// 							type={item.type}
// 							onClick={() => {
// 								handleClick(item.name);
// 							}}>
// 							{item.name}
// 						</button>
// 					))}
// 				</div>
// 			</div>
// 		</form>
// 	);
// }
