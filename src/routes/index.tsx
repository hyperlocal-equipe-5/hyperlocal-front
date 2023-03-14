import { Outlet, createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/errorPage';
import Form from '../pages/Form';
import Home from '../pages/Home';
import Navbar from '../components/navbar';
import OrderForm from '../pages/Form/OrderForm';
import RestaurantForm from '../pages/Form/RestaurantForm';
import RoleForm from '../pages/Form/RoleForm';

const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/form',
				element: <Form />,
			},
			{
				path: '/roleform',
				element: <RoleForm />,
			},
			{
				path: '/form/restaurantes/:id',
				element: <RestaurantForm />,
			},
			{
				path: '/orderform',
				element: <OrderForm />,
			},
			{
				path: '/menu',
				element: <Home />,
			},
			{
				path: '/finance',
				element: <Home />,
			},
		],
	},
]);

export default Routes;
