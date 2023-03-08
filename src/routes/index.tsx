import { createBrowserRouter } from 'react-router-dom';
import Form from '../pages/Form';
import RestaurantForm from '../pages/Form/RestaurantForm';
import Home from '../pages/Home';

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/form',
		element: <Form />,
		children: [],
	},
	{
		path: '/restaurantes',
		element: <RestaurantForm />,
	},
]);

export default Routes;
