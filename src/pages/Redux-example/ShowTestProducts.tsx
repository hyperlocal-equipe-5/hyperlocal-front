import { useSelector } from 'react-redux';
import { type RootState } from '../../store/store';

export function ShowTestProducts() {
	const testProducts: string[] = useSelector(
		(state: RootState) => state.testProducts.value,
	);

	return (
		<div>
			{testProducts.map((product, index) => (
				<p key={index}>{product}</p>
			))}
		</div>
	);
}
