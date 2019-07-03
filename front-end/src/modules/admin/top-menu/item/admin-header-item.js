import React, { Component } from 'react';
import {Input, Icon} from 'antd';

class AdminHeaderItem extends Component {
  constructor(props) {
    super(props)
    this.text = props.text
  }

  render() {
    return (
      <div className='top-menu-item'>
        {/* {this.text} */}

        <span className='search-box'>
          <Icon type="search" />
          <Input className="input" placeholder="Nhập tên truyện" />
        </span>


      </div>
    );
  }
}

export default AdminHeaderItem;