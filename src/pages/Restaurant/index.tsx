import React from 'react';
import Restaurants from '../../components/Restaurants';
import styled from './styled.module.scss';

const Restaurant = () => {
	return (
		<div className={styled.container}>
			<div className={styled.titulo}>
				<h1>Restaurantes</h1>
			</div>
			<div className={styled.box_restaurant}>
				<Restaurants />
			</div>
		</div>
	);
};

export default Restaurant;
