import React from 'react';

import { hydrateRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

hydrateRoot(
	document.getElementById("root"),
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
