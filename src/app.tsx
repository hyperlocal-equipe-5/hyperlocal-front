import { Outlet } from 'react-router-dom';
import Navbar from './components/menu';

const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;
