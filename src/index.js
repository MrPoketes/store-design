import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Navigation from "./containers/Navigation";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./stores/configureStore";
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Navigation />
      {/* <Footer /> */}
    </Provider>
  </div>,
  document.getElementById('root')
);
