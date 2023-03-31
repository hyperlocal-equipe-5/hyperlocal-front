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
				<h2>Nº: </h2>
				<div>
					<ul>
						<li>VegBuguer</li>
						<li>Coca</li>
						<li>Sorvete</li>
					</ul>
				</div>
			</div>

			{/* <div className={styled.box_cozinha}>
        <h2>Nº: </h2>
        <h3>Hamburguer</h3>
        <div>
          <ul>
            <li>pão</li>
            <li>2 carnes</li>
            <li>alface</li>
            <li>cebola</li>
            <li>mussarela</li>
          </ul>
        </div>
        <h2>Extras</h2>
        <div>
          <ul>
            <li>Bacon</li>
            <li>Ovo</li>
          </ul>
        </div>
        <h2>Bebidas</h2>
        <div className={styled.box_bebidas}>
          <ul>
            <li>Coca</li>
          </ul>
        </div>
        <h2>Sobremesas</h2>
        <div className={styled.box_bebidas}>
          <ul>
            <li>Sorvete</li>
          </ul>
        </div>

      </div> */}

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
