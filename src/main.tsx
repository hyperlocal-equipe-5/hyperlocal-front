/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import App from './pages/App';
import Erro404 from './pages/Erro404';
import Cadastro from './pages/login/cadastro/Cadastro';

import CadastrarProdutos from './pages/home/cadastrarProdutos/CadastrarProdutos';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Erro404 />,
		children: [
			{
				path: '/',
				element: <Login />,
			},

			{
				path: '/cadastro',
				element: <Cadastro />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/cadastrar',
				element: <CadastrarProdutos />,
			},
		],
	},

]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
