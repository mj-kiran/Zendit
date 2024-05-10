import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './shared/style/common.style.scss'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
      closeOnClick
      hideProgressBar
      autoClose={1000}
      pauseOnFocusLoss
      newestOnTop={false}
      position="top-right"
    />
    <App />
  </React.StrictMode>
);
