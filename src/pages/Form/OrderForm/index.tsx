import PesquisaBox from '../../../components/PesquisaBox';
import { pesquisa } from '../../../mocks/pesquisa';
import styled from './styled.module.scss';

// interface OrderProps {
// 	orders: OrderResponse;
// }

const OrderForm = () => {
	return (
		<div className={styled.box_pedido}>
			<h2 className={styled.titulo}>Pedidos</h2>
			<div className={styled.box_itens}>
				<ul>
					<li>Pedido nº: </li>
					<li>Veg-Bruguer</li>
					<li>Suco de Laranja</li>
					<li>Pudim de leite</li>
				</ul>
			</div>
			<div className={styled.ordem_pedido}>
				<h3>Retirada</h3>
				<p>Seu pedido é o nº 2 da fila</p>
				<h3 className={styled.border}>Poderia nos Avaliar?</h3>
			</div>
			{pesquisa.map((pesquisa: any) => (
				<PesquisaBox pesquisa={pesquisa} key={pesquisa.question} />
			))}
		</div>
	);
};

export default OrderForm;
