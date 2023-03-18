import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import DataLoader from './components/DataLoader/DataLoader';
import './index.css';
import './reset.css';
import Routes from './routes';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<DataLoader />
			<RouterProvider router={Routes} />
		</Provider>
	</React.StrictMode>,
);
