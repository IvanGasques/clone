import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export {default as Article} from "./components/article/Article";
export {default as Brand} from "./components/article/Brand/Brand";
export {default as Cta} from "./components/article/Cta/Cta";
export {default as Feature} from "./components/article/Feature/Feature";
export {default as Navbar} from "./components/article/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


