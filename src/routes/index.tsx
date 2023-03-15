import { Outlet, createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/errorPage';
import Form from '../pages/Form';
import Home from '../pages/Home';
import IngredientForm from '../pages/Form/IngredientForm';
import Navbar from '../components/navbar';
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
				path: '/workers',
				element: <Home />,
			},
			{
				path: '/ingredientform',
				element: <IngredientForm />,
			},
			{
				path: '/finance',
				element: <Home />,
			},
		],
	},
]);

export default Routes;
