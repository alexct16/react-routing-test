import React from 'react';
import ReactDOM from 'react-dom';
import { landingPage } from './landing.page';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <landingPage />
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
