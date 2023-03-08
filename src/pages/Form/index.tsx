import Header from '../../components/Header/Header';
// import { AiOutlineLeft } from 'react-icons/ai';
import UserForm from './UserForm';
import styled from './styled.module.scss';
const Form = () => {
	return (
		<>
			<Header />
			<div className={styled.container}>
				<UserForm />
			</div>
		</>
	);
};

export default Form;
