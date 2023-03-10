import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import ErrorPage from '../pages/errorPage';
import Form from '../pages/Form';
import RestaurantForm from '../pages/Form/RestaurantForm';
import Home from '../pages/Home';

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
