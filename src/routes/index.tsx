import { Outlet, createBrowserRouter } from 'react-router-dom';

import Add from '../pages/Add';
import AddCategory from '../pages/Add/AddCategory';
import AddOrder from '../pages/Add/AddOrder';
import AddProduct from '../pages/Add/AddProduct';
import AddRestaurant from '../pages/Add/AddRestaurant';
import Cadastro from '../pages/Cadastro/Cadastro';
import CategoryPage from '../pages/CategoryPage';
import Employees from '../pages/Employees';
import ErrorPage from '../pages/errorPage';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu';
import Navbar from '../components/Navbar';
import ProductPage from '../pages/ProductPage';
import Restaurant from '../pages/Restaurant';
import RestaurantForm from '../pages/Form11/RestaurantForm';
import RoleForm from '../pages/Form11/RoleForm';
import { TableListPage } from '../pages/TableListPage/TableListPage';
import { TableQrCode } from '../pages/TableQrCode/TableQrCode';
import UserForm from '../pages/Form11/UserForm';

const App = () => {
	return (
		<>
			<Header />
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
			{ path: '/login', element: <Login /> },
			{ path: '/cadastro', element: <Cadastro /> },
			{ path: '/', element: <Home /> },
			{ path: '/category/:id', element: <CategoryPage /> },
			{ path: '/product/:id', element: <ProductPage /> },
			{ path: '/add', element: <Add /> },
			{ path: '/add/restaurant', element: <AddRestaurant /> },
			{ path: '/add/category', element: <AddCategory /> },
			{ path: '/add/product', element: <AddProduct /> },
			{ path: '/add/order', element: <AddOrder /> },
			{ path: '/add/user', element: <UserForm /> },
			{ path: '/add/role', element: <RoleForm /> },
			{ path: '/form/restaurantes/:id', element: <RestaurantForm /> },
			{ path: '/employees', element: <Employees /> },
			{ path: '/menu', element: <Menu /> },
			{ path: '/finance', element: <Home /> },
			{ path: '/tables', element: <TableListPage /> },
			{ path: '/table/qr-code/:tableNumber', element: <TableQrCode /> },
			{ path: '/restaurant', element: <Restaurant /> },
		],
	},
]);

export default Routes;
