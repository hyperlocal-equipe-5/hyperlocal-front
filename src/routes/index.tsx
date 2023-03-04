import { createBrowserRouter } from 'react-router-dom';
import Form from '../pages/Form';
import Home from '../pages/Home';

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
