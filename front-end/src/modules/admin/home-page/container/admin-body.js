import React, { Component } from 'react';
import { Pagination, BackTop } from 'antd';
import FilterHomePage from './filter-home-page/filter-home-page';
import ListBook from './list-book/list-book';

class AdminBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      height : '',
    }
  }
  // var h = window.innerHeight;
  
  render() {
    function onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    }
    // this.setState({
    //   height : window.innerHeight,
    // })
    // console.log(this.state)
    return (
      <div className="content-wrapper body-bg pd-top-20 pd-lr-40" style={{ minHeight : '1300px'}}>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <FilterHomePage/>
      
        </section>
        {/* Main content */}
        <section className="content">
          <ListBook/>
        </section>
        <section className="content-footer">
          <div className="text-center pd-tb-50">
            <Pagination
              total={1500}
              showTotal={total => `Tất cả ${total} items`}
              pageSize={50}
              defaultCurrent={1}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSizeOptions={[50, 100, 150, 200]}
            />
          </div>
        </section>
        {/* /.content */}
        <div>
          <BackTop />
          <strong style={{ color: '#000' }}></strong>
        </div>
      </div>
    )
  }
}

export default AdminBody;