import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro';
import Login from '../pages/Login/Login';
import Qrcode from '../pages/Qrcode/Qrcode';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/cadastro" element={<Cadastro />} />
					<Route path="*" element={<Login />} />
					<Route path="/qrcode" element={<Qrcode />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
};

export default RoutesApp;