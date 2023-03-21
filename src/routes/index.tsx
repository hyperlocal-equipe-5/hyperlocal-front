import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategoryPage from '../pages/CategoryPage';
import Form from '../pages/Form';
import RestaurantForm from '../pages/Form/RestaurantForm';
import RoleForm from '../pages/Form/RoleForm';
import UserForm from '../pages/Form/UserForm';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import ErrorPage from '../pages/errorPage';

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
				path: '/product/:id',
				element: <ProductPage />,
			},
			{
				path: '/add',
				element: <Form />,
			},
			{
				path: '/add/restaurant',
				element: <RestaurantForm />,
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
