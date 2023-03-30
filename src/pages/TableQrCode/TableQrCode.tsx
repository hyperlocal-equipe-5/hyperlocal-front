import { useParams } from 'react-router-dom';
import Qrcode from '../../components/Qrcode/Qrcode';
import { RestaurantIdHandler } from '../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import Container from '../../style/Container';
import styled from './styled.module.scss';

export function TableQrCode() {
	const { tableNumber } = useParams();
	const originUrl = window.location.origin;

	function getLink() {
		const restaurantId = new RestaurantIdHandler().get();

		return `${originUrl}?restaurant=${restaurantId}&table=${tableNumber}`;
	}

	return (
		<Container>
			<div className={styled.mainDiv}>
				<h2 className={styled.title}>Código QR da mesa {tableNumber}:</h2>
				<Qrcode qrlink={getLink()} />
			</div>
		</Container>
	);
}
