import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/Home';

const Routes = createBrowserRouter(
	createRoutesFromElements(
		<Route index element={<Home />} />,
		// <Route path='/form' element={<Home />} />
		// <Route path='/user' element={<Home />} />
		// <Route path='/login' element={<Home />} />
		// <Route path='*' element={<404 />} />
	),
);

export default Routes;
