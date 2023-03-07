import Form from '../pages/Form';
import Home from '../pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/form',
		element: <Form />,
	},
]);

export default Routes;
