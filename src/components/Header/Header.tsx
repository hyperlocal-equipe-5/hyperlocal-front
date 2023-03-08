import { AiOutlineLeft } from 'react-icons/ai';
import React from 'react';
import styled from './styled.module.scss';

const Header = () => {
	return (
		<div className={styled.header}>
			<div className={styled.icon}>
				<AiOutlineLeft color={'#8bf24f'} size={25} />
			</div>
			<div className={styled.logo} />
		</div>
	);
};

export default Header;
