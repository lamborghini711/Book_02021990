import React from 'react';
import './App.css';
import AdminHeader from './modules/admin/top-menu/admin-header';
import AdminBody from './modules/admin/home-page/container/admin-body';
import AdminFooter from './modules/admin/footer/admin-footer';
import LeftMenu from './modules/admin/left-menu/left-menu'

function App() {

  return (
    <div >
      <body className="sidebar-mini sidebar-mini-expand-feature skin-red fixed" 
            style={{height: 'auto', minHeight: '100%'}}>
        <div className="wrapper">
          <AdminHeader/>
          <LeftMenu/>
          <AdminBody/>
          <AdminFooter/>
        </div>
      </body>
    </div>
  );
}

export default App;
