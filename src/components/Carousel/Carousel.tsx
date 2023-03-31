import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styled from './styled.module.scss';
import { type ProductResponse } from './type';

interface ProductsProps {
	product: ProductResponse;
	active: boolean;
	onPrev: () => void;
	onNext: () => void;
}

const Carousel = ({ product, active, onPrev, onNext }: ProductsProps) => {
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
				<BsChevronLeft size={50} color="#8bf24f" onClick={onPrev} />
			</button>
			<button className={styled.chevronR}>
				<BsChevronRight size={50} color="#8bf24f" onClick={onNext} />
			</button>
		</div>
	) : (
		<></>
	);
};

export default Carousel;
