import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Deck from "./Deck";
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/deck/:deckId",
    element: <Deck />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='page'>
    <Header></Header>
    <RouterProvider router={router} />
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
