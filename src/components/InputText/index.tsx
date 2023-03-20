interface IInput {
	name: string;
	OnChange: (e: any) => void;
}

const InputText = ({ name, OnChange }: IInput) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-textColor py-2">{name}</h1>
			<input
				onChange={e => OnChange(e)}
				type="text"
				className="bg-white h-8 w-full rounded-md text-bg px-2"
				placeholder={`Criar um novo ${name}`}
			/>
		</div>
	);
};
export default InputText;
