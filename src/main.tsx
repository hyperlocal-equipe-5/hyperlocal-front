/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import App from './pages/App';
import Erro404 from './pages/Erro404';
import Cadastro from './pages/cadastro/Cadastro';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Erro404/>,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/cadastro',
				element: <Cadastro/>,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
