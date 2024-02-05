import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';




const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
    <App />
);