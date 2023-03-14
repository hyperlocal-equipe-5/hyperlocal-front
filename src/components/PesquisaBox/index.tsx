import { type PesquisaResponse } from './type';
import styled from './styled.module.scss';
import Star from '../star';
import { useState } from 'react';

interface PesquisaProps {
	pesquisa: PesquisaResponse;
}

const itens: number[] = [...(new Array(5).keys() as any)]; // cria um array de numeros
const PesquisaBox = ({ pesquisa }: PesquisaProps) => {
	const [activeIndex, setActiveIndex] = useState<number>();

	const onClickStar = (index: number) => {
		setActiveIndex(oldState => (oldState === index ? undefined : index));
	};

	return (
		<div className={styled.box_pesquisa}>
			<p>{pesquisa.question}</p>
			<div className={styled.container}>
				{itens.map(index => (
					<Star
						onClick={() => onClickStar(index)}
						key={`star_${index}`}
						isActive={index <= activeIndex!}
					/>
				))}
			</div>
		</div>
	);
};

export default PesquisaBox;
