import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/Home';
import BookSelect from './book-select/book-select';
import BookDetail from './book-detail/book-detail';

class RouterUrl extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/select" component={BookSelect} />
          <Route exact path="/detail" component={BookDetail} />
        </div>
      </Router>
    );
  }
}

export default RouterUrl;