import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Navigation from "./containers/Navigation";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Footer from "./components/Footer";

ReactDOM.render(
  <div>
    <Navigation/>
    <Footer/>
  </div>,
  document.getElementById('root')
);
