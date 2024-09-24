import React from 'react';
import {Provider as RTKProvider} from 'react-redux';
import {store} from './redux/store';
import Router from "./router/Router";

function App() {
  return (
    <RTKProvider store={store}>
      <Router />
    </RTKProvider>
  );
}

export default App;
