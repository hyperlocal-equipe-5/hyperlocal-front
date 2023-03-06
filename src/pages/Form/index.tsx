import { AiOutlineLeft } from 'react-icons/ai';
import UserForm from './UserForm';
import styled from './styled.module.scss';
const Form = () => {
	return (
		<>
			<div className={styled.header}>
				<div className={styled.icon}>
					<AiOutlineLeft color={'#8bf24f'} size={25} />
				</div>
				<div className={styled.logo} />
				<div className={styled.avatar} />
			</div>

			<div className={styled.container}>
				<UserForm />
			</div>
		</>
	);
};

export default Form;
