import React from 'react';
import './App.css';
import AdminHeader from './modules/admin/top-menu/admin-header';
import AdminBody from './modules/admin/home-page/container/admin-body';
import AdminFooter from './modules/admin/admin-footer';

function App() {

  return (
    <div>
        <AdminHeader/>
        <AdminBody/>
        <AdminFooter/>
    </div>
  );
}

export default App;
