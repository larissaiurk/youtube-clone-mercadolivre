import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";

import Routes from './routes';

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
