import React, { Component } from 'react';
import { Layout } from 'antd';

class AdminBody extends Component {
  render() {
    return (
      <Layout>
          <div className="text-center size-18 margin-top-60 text-bold">
            Quản lý đánh giá 360!
          </div>
          <div className="text-center margin-t-b-70">
            {/* <img src='https://hstatic.net/0/global/design/imgs/macbook.png' alt='as' /> */}
          </div>
        </Layout>
    )
  }
}

export default AdminBody;