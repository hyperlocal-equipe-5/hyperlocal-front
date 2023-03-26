// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CategoryBox from '../../components/CategoryBox';
// import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
// import { getCategories } from '../../store/slices/category-slice';
// import { type RootState } from '../../store/store';
// import Container from '../../style/Container';

// const Home = () => {
// 	const dispatch = useDispatch();
// 	const categoryStore = useSelector((state: RootState) => state.category.value);
// 	console.log(categoryStore);

// 	useEffect(() => {
// 		makeCategoryRouterFactory()
// 			.getAllCategories()
// 			.then(data => {
// 				dispatch(getCategories(data.body));
// 			})
// 			.catch(error => console.log(error));
// 	}, []);

// 	return (
// 		<Container>
// 			{categoryStore && categoryStore.length > 0 ? (
// 				categoryStore.map((category, key) => (
// 					<CategoryBox
// 						key={key}
// 						idCategory={category.id}
// 						NameCategory={category.name}
// 						Product={category.products.map(product => ({
// 							ProductId: product.id,
// 							image: product.image,
// 							NameProduct: product.name,
// 						}))}
// 					/>
// 				))
// 			) : (
// 				<></>
// 			)}
// 		</Container>
// 	);
// };

// export default Home;
import { useState } from 'react';

import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import useRecursiveTimeout from '../../Hooks/useRecursiveTimeout';
import Carousel from '../../components/Carousel/Carousel';
import { products } from '../../mocks/produtos';
import Container from '../../style/Container';
import styled from './styled.module.scss';

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
		<Container>
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
					<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
						<SiFacebook color="grey" size={35} />
					</a>
					<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
						<AiFillInstagram color="grey" size={40} />
					</a>
					<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
						<AiFillYoutube color="grey" size={45} />
					</a>
				</div>
			</footer>
		</Container>
	);
};

export default Home;
