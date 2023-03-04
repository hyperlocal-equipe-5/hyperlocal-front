import { useState } from 'react';

const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<h1>Vite + React</h1>
				<div className="card">
					<button
						onClick={() => {
							setCount(count => count + 1);
						}}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
	);
};

export default Home;
