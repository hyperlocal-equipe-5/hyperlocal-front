interface FormProps {
	children: React.ReactNode;
	styleInline?: string;
	OnSubmit: (e: any) => void;
}

const FormBox = ({ children, styleInline, OnSubmit }: FormProps) => {
	return (
		<>
			<form
				onSubmit={OnSubmit}
				className={`flex flex-col min-w-[50rem] tablet:min-w-full mobile:min-w-full max-w-screen-md items-center gap-4 ${styleInline}`}>
				{children}
			</form>
		</>
	);
};

export default FormBox;
