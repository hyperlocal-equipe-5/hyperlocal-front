import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import './reset.css';
import Router from './routes/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
);
