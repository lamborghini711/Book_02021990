import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/Home';
import BookSelect from './book-select/book-select';
import BookDetail from './book-detail/book-detail';
import CreateBook from './create-book/create-book';
import EditBook from './edit-book/edit-book';


class RouterUrl extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/truyen-:slug.:id" component={BookSelect} />
          <Route exact path="/chuong-:chapter-:slug.:id" component={BookDetail} />
          <Route exact path="/create" component={CreateBook} />
          <Route exact path="/edit:slug.:id" component={EditBook} />
        </div>
      </Router>
    );
  }
}

export default RouterUrl;