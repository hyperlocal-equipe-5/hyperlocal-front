import {
	BoxContainer,
	ProductBox,
	ScrollBox,
	ScrollBoxdobox,
	Title,
} from './styled';

const CategoryBox = () => {
	return (
		<BoxContainer>
			<Title>Texto</Title>
			<ScrollBoxdobox>
				<ScrollBox>
					<ProductBox>
						<p>Texto</p>
					</ProductBox>
					<ProductBox>
						<p>Texto</p>
					</ProductBox>
					<ProductBox>
						<p>Texto</p>
					</ProductBox>
					<ProductBox>
						<p>Texto</p>
					</ProductBox>
					<ProductBox>
						<p>Texto</p>
					</ProductBox>
				</ScrollBox>
			</ScrollBoxdobox>
		</BoxContainer>
	);
};

export default CategoryBox;
