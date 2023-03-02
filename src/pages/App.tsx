/* eslint-disable prettier/prettier */

import { Outlet } from "react-router";
import NavBar from "./components/NavBar";


const App = () => {
	

	return (
		<div className="flex items-center justify-center">
			<div>
				
				<h1>header</h1>
				<NavBar/>
			    <Outlet/>
				
				<p className="read-the-docs">
					foter
				</p>
			</div>
		</div>
	);
};

export default App;
