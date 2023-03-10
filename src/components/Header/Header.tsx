import { AiOutlineLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from './styled.module.scss';

const Header = () => {
	return (
		<div className={styled.header}>
			<div className={styled.icon}>
				<NavLink to={'/form'}>
					<AiOutlineLeft color={'#8bf24f'} size={25} />
				</NavLink>
			</div>
			<div className={styled.logo} />
		</div>
	);
};

export default Header;
