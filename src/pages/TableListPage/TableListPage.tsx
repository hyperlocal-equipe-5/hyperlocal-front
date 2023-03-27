import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BoxesBody } from '../../components/BoxesBody/BoxesBody';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';
import Title from '../../style/Title';
import styled from './styled.module.scss';

export function TableListPage() {
	const navigate = useNavigate();
	const tables = useSelector((state: RootState) => state.table.value).map(
		table => ({
			id: table.number.toString(),
			boxLabel: `Mesa ${table.number}`,
			boxContent: table.number.toString(),
			imageBox: false,
		}),
	);

	function onTableSelect(selectedTableId: string) {
		navigate(`/table/qr-code/${selectedTableId}`);
	}

	const tableList = {
		sections: [
			{
				sectionTitle: 'Mesas',
				sectionBoxes: tables,
			},
		],

		boxSelectionCallback: onTableSelect,
	};

	return (
		<Container>
			<div className={styled.tableListDiv}>
				<Title>Mesas</Title>
				<BoxesBody content={tableList} />
			</div>
		</Container>
	);
}
