// Important import 
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Sass
import "./sass/app.scss";

// Import script of bootstrap ( in index.html or here )
import script from "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Import for router 
import { BrowserRouter as Router } from 'react-router-dom';

// Import Launcher App :
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  return (
    <React.StrictMode>
      <Router basename="/">
          <App />
          {/* <script src={script}></script> */}
      </Router>
    </React.StrictMode>
  );
};
root.render(<Index />, document.getElementById('root'));
