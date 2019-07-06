import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookDetail from './book-detail/detail/detail';
import AdminBody from './admin/home-page/container/admin-body';

class RouterUrl extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/home" component={AdminBody} />
          <Route exact path="/detail" component={BookDetail} />
        </div>
      </Router>
      
    );
  }
}

export default RouterUrl;