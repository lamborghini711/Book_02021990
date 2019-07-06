import React from 'react';
import './App.css';
import RouterUrl from './modules/router';

function App() {
  return (
    <div >
      <div className="sidebar-mini sidebar-mini-expand-feature skin-red fixed">
        <div className="wrapper">
          <RouterUrl/>
        </div>
      </div>
    </div>
  );
}

export default App;
