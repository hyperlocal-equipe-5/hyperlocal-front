interface ICheckBox {
	name: string;
	id: string;
	OnChange: (e: any) => void;
}

const CheckBox = ({ id, name, OnChange }: ICheckBox) => {
	return (
		<>
			<div className="flex flex-row items-center">
				<input
					onChange={e => OnChange(e)}
					className="h-6 w-6 checked:bg-[#75ba12]"
					type="checkbox"
					id={id}
					value={name}
				/>
				<label className="pl-2 text-2xl text-[#fefbff] capitalize" htmlFor={id}>
					{name}
				</label>
			</div>
		</>
	);
};

export default CheckBox;
