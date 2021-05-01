import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExtraNeeded from './Components/ExtraNeeded/ExtraNeeded';

ReactDOM.render(
    <React.StrictMode>
        <ExtraNeeded/>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
