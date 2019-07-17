import React, { Component } from 'react';
import AdminHeader from '../top-menu/admin-header';
import LeftMenu from '../left-menu/left-menu';
import BodyTopic from './body-topic/body-topic'

class Topic extends Component {
  render() {
    let param = this.props.match
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <BodyTopic param={param}/>
      </div>
    )
  }
}

export default Topic;