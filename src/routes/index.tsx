import Home from '../pages/Home';
import UserForm from '../pages/Form/UserForm';
import { createBrowserRouter } from 'react-router-dom';

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/useform',
		element: <UserForm />,
	},
]);

export default Routes;
