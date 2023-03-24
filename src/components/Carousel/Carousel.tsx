import { BsChevronLeft, BsChevronRight } from 'react-icons/Bs';
import styled from './styled.module.scss';
import { type ProductResponse } from './type';

interface ProductsProps {
	product: ProductResponse;
	active: boolean;
	onClick: () => void;
}

const Carousel = ({ product, active, onClick }: ProductsProps) => {
	return active ? (
		<div className={styled.box_carousel}>
			<img src={product.image} alt="foto" />
			<div className={styled.box_info}>
				<h1>{product.name}</h1>
				<p>{product.description}</p>
				<h2>{product.price}</h2>
				<button className={styled.product_button}>Produto</button>
			</div>
			<button className={styled.chevronL}>
				<BsChevronLeft size={50} color="#8bf24f" onClick={onClick} />
			</button>
			<button className={styled.chevronR}>
				<BsChevronRight size={50} color="#8bf24f" onClick={onClick} />
			</button>
		</div>
	) : (
		<></>
	);
};

export default Carousel;
