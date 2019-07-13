import React from 'react';
import './App.css';
import RouterUrl from './modules/router';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="sidebar-mini sidebar-mini-expand-feature skin-blue fixed">
        <div className="wrapper">
          <RouterUrl/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
