import { Outlet, createBrowserRouter } from 'react-router-dom';

import CategoryPage from '../pages/CategoryPage';
import ErrorPage from '../pages/errorPage';
import Form from '../pages/Form';
import Home from '../pages/Home';
import Navbar from '../components/navbar';
import RestaurantForm from '../pages/Form/RestaurantForm';
import RoleForm from '../pages/Form/RoleForm';
import UserForm from '../pages/Form/UserForm';

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
				path: '/category/:id',
				element: <CategoryPage />,
			},
			{
				path: '/add',
				element: <Form />,
			},
			{
				path: '/add/user',
				element: <UserForm />,
			},
			{
				path: '/add/role',
				element: <RoleForm />,
			},
			{
				path: '/form/restaurantes/:id',
				element: <RestaurantForm />,
			},
			{
				path: '/workers',
				element: <Home />,
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
