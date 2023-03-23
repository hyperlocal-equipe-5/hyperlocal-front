import { Outlet, createBrowserRouter } from 'react-router-dom';
import Add from '../pages/Add';
import AddCategory from '../pages/Add/AddCategory';
import AddOrder from '../pages/Add/AddOrder';
import AddProduct from '../pages/Add/AddProduct';
import AddRestaurant from '../pages/Add/AddRestaurant';
import CategoryPage from '../pages/CategoryPage';
import RestaurantForm from '../pages/Form11/RestaurantForm';
import RoleForm from '../pages/Form11/RoleForm';
import UserForm from '../pages/Form11/UserForm';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import ErrorPage from '../pages/errorPage';
import Login from '../pages/Login/Login';
import Navbar from '../components/Navbar';
import Cadastro from '../pages/Cadastro/Cadastro';

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
				path: '/login',
				element: <Login />,
			},
			{
				path: '/cadastro',
				element: <Cadastro />,
			},
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
				element: <AddRestaurant />,
			},
			{
				path: '/add/category',
				element: <AddCategory />,
			},
			{
				path: '/add/product',
				element: <AddProduct />,
			},
			{
				path: '/add/order',
				element: <AddOrder />,
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
