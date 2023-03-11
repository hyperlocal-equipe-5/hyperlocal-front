import { addProduct } from '../../store/slices/testProduct.slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function CreateTestProduct() {
	const [product, setProduct] = useState('');
	const dispatch = useDispatch();

	function addNewProduct() {
		dispatch(addProduct(product));
	}

	return (
		<div>
			{/* <form>
				<input
					type="text"
					onChange={event => {
						setProduct(event.target.value);
					}}
				/>
				<button type="button" onClick={addNewProduct}>
					Add
				</button>
			</form> */}
		</div>
	);
}
