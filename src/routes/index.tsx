import { Outlet, createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Add from '../pages/Add';
import AddResutaurant from '../pages/Add/AddRestaurant';
import CategoryPage from '../pages/CategoryPage';
import RestaurantForm from '../pages/Form11/RestaurantForm';
import RoleForm from '../pages/Form11/RoleForm';
import UserForm from '../pages/Form11/UserForm';
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
				path: '/:restaurantId',
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
				element: <Add />,
			},
			{
				path: '/add/restaurant',
				element: <AddResutaurant />,
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
