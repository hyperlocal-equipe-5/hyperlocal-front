import { Outlet } from 'react-router';

import Routes from '../assets/components/routes';

const App = () => {
	return (
		<div className="flex items-center justify-center">
			<div>
				<h1>header</h1>
				<Routes />
				<Outlet />

				<p className="read-the-docs">foter</p>
			</div>
		</div>
	);
};

export default App;
