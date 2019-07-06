import React from 'react';
import './App.css';
import AdminHeader from './modules/admin/top-menu/admin-header';
// import AdminBody from './modules/admin/home-page/container/admin-body';
import AdminFooter from './modules/admin/footer/admin-footer';
import LeftMenu from './modules/admin/left-menu/left-menu'
import RouterUrl from './modules/router';

function App() {

  return (
    <div >
      <div className="sidebar-mini sidebar-mini-expand-feature skin-red fixed" 
            style={{height: 'auto', minHeight: '100%'}}>
        <div className="wrapper">
          <AdminHeader/>
          <LeftMenu/>
          {/* <AdminBody/> */}
          <RouterUrl/>

          <AdminFooter/>
        </div>
      </div>
    </div>
  );
}

export default App;
