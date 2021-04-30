import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bgImg from "./Images/maxwell-nelson-v6TksP-5d9w-unsplash.jpg"

ReactDOM.render(
    <React.StrictMode>
        <img src={bgImg} className="body-bg-img" alt="" />
        <div className="bg-overlay"></div>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
