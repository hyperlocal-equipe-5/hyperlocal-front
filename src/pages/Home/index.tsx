import { useEffect, useRef, useState } from 'react';

import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import Carousel from '../../components/Carousel/Carousel';
import Container from '../../style/container';
import { SiFacebook } from 'react-icons/Si';
import { products } from '../../mocks/produtos';
import styled from './styled.module.scss';
import useRecursiveTimeout from '../../Hooks/useRecursiveTimeout';

const Home = () => {
	const [active, setActive] = useState(0);

	useRecursiveTimeout(async () => {
		setActive(active + 1);
	}, 5000);

	function handleActive(posicao: number) {
		const total = products.length - 1;
		if (active % total === posicao) {
			return true;
		}
		return false;
	}
	function handleClick() {
		setActive(active - 1 || active + 1);
	}

	return (
		<>
			{/* <Container> */}
			{/* aqui {active} */}
			<div className={styled.box_geral}>
				<section className={styled.box_section}>
					<div className={styled.box_titulo}>
						<h1>El Hamburgão</h1>
						<h2>Aberto de Terça </h2>
						<h2> a Domingo</h2>
						<h3>18:00 to 1:00</h3>
						<p>Av. Getúlio Vargas 666</p>
					</div>

					<div className={styled.box_produto}>
						<div>
							{products.map((product: any, index) => (
								<Carousel
									key={product.name}
									product={product}
									active={handleActive(index)}
									onClick={handleClick}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
			<footer>
				<div className={styled.icons}>
					<a href="https://www.facebook.com/">
						<SiFacebook color="grey" size={35} />
					</a>
					<a href="https://www.instagram.com/">
						<AiFillInstagram color="grey" size={40} />
					</a>
					<a href="https://www.youtube.com/">
						<AiFillYoutube color="grey" size={45} />
					</a>
				</div>
			</footer>
			{/* </Container> */}
		</>
	);
};

export default Home;
