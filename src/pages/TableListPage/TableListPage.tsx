import { AccessValidator } from '../../components/AccessValidator/AccessValidator';
import { BoxesBody } from '../../components/BoxesBody/BoxesBody';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';
import { UserAccess } from '../../types/UserAccessType';
import styled from './styled.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BoxButton from '../../components/BoxButton';
import { type Table } from '../../domain/entities/table';
import Title from '../../style/Title';

export function TableListPage() {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const [table, setTables] = useState<Table[]>();
	const tables = useSelector((state: RootState) => state.table.value);

	useEffect(() => {
		setTables(tables);
	}, [tables]);

	return (
		<Container>
			<AccessValidator
				setLoading={setLoading}
				navigateFunction={navigate}
				accessType={UserAccess.readTables}
				redirectRouteOnFail={'/'}
			/>
			{loading ? (
				<></>
			) : (
				<div className="flex flex-col items-center overflow-x-hidden justify-center py-3 max-w-[1300px] w-auto">
					{/* <div className="flex flex-col items-center overflow-x-hidden justify-center py-3 w-auto">
				<div className={styled.tableListDiv}> */}
					<Title>Mesas</Title>
					<div className="flex flex-row flex-wrap  items-start justify-center px-6 gap-y-10">
						{tables.map((el, i) => (
							<BoxButton
								key={i}
								img={''}
								title={`Mesa ${el.number}`}
								click={() => navigate(`/table/qr-code/${el.id}`)}
							/>
						))}
						{/* <BoxesBody content={tableList} /> */}
					</div>
				</div>
			)}
		</Container>
	);
}
