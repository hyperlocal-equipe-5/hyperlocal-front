import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Add from '../pages/Add';
import AddCategory from '../pages/Add/AddCategory';
import AddOrder from '../pages/Add/AddOrder';
import AddProduct from '../pages/Add/AddProduct';
import AddRestaurant from '../pages/Add/AddRestaurant';
import AddUser from '../pages/Add/AddUser';
import AddTable from '../pages/Add/addTable';
import Cadastro from '../pages/Cadastro/Cadastro';
import CategoryPage from '../pages/CategoryPage';
import Employees from '../pages/Employees';
import RoleForm from '../pages/Form11/RoleForm';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu';
import ProductPage from '../pages/ProductPage';
import { TableListPage } from '../pages/TableListPage/TableListPage';
import { TableQrCode } from '../pages/TableQrCode/TableQrCode';
import ErrorPage from '../pages/errorPage';

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
			{ path: '/', element: <Menu /> },
			{ path: '/login', element: <Login /> },
			{ path: '/cadastro', element: <Cadastro /> },
			{ path: '/:restaurantId/:tableId', element: <Home /> },
			{ path: '/:restaurantId', element: <Home /> },
			{ path: '/category/:id', element: <CategoryPage /> },
			{ path: '/product/:id', element: <ProductPage /> },
			{ path: '/add', element: <Add /> },
			{ path: '/add/restaurant', element: <AddRestaurant /> },
			{ path: '/add/category', element: <AddCategory /> },
			{ path: '/add/product', element: <AddProduct /> },
			{ path: '/add/order', element: <AddOrder /> },
			{ path: '/add/user', element: <AddUser /> },
			{ path: '/add/table', element: <AddTable /> },
			{ path: '/add/role', element: <RoleForm /> },
			{ path: '/employees', element: <Employees /> },
			{ path: '/menu', element: <Menu /> },
			{ path: '/tables', element: <TableListPage /> },
			{ path: '/table/qr-code/:tableNumber', element: <TableQrCode /> },
		],
	},
]);

export default Routes;
