import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccessValidator } from '../../components/AccessValidator/AccessValidator';
import { BoxesBody } from '../../components/BoxesBody/BoxesBody';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';
import { UserAccess } from '../../types/UserAccessType';
import styled from './styled.module.scss';

export function TableListPage() {
	const [loading, setLoading] = useState(true);
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
			<AccessValidator
				setLoading={setLoading}
				navigateFunction={navigate}
				accessType={UserAccess.readTables}
			/>
			{loading ? (
				<></>
			) : (
				<div className={styled.tableListDiv}>
					<BoxesBody content={tableList} />
				</div>
			)}
		</Container>
	);
}
