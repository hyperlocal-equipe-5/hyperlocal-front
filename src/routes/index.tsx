import { createBrowserRouter } from 'react-router-dom';
import App from '../app';
import Home from '../pages/Home';

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/form',
				element: <Home />,
			},
			{
				path: '/finance',
				element: <Home />,
			},
			{
				path: '/workers',
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Home />,
			},
		],
	},
]);

export default Routes;
