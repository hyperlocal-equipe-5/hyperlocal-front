interface ICheckBox {
	name: string;
	id: string;
}

const CheckBox = ({ id, name }: ICheckBox) => {
	return (
		<>
			<div className="flex flex-row items-center">
				<input
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
