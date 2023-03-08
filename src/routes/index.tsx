import Form from '../pages/Form';
import Home from '../pages/Home';
import RoleForm from '../pages/Form/RoleForm';
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
	{
		path: '/roleform',
		element: <RoleForm />,
	},
]);

export default Routes;
