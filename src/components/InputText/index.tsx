interface IInput {
	name: string;
	OnChange: (e: any) => void;
}

const InputText = ({ name, OnChange }: IInput) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-details py-3 text-2xl font-semibold">{name}</h1>
			<input
				onChange={(e: any) => OnChange(e)}
				type="text"
				className="bg-white h-8 w-full rounded-xl text-bg px-2"
				placeholder={`Criar um novo ${name}`}
			/>
		</div>
	);
};
export default InputText;
