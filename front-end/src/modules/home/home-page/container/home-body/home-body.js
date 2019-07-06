import React, { Component } from 'react';
import { Pagination, BackTop, Icon } from 'antd';
import FilterHomePage from './../filter-home-page/filter-home-page';
import ListBook from './../list-book/list-book';
import HotBook from './../hot-book/hot-book';

class HomeBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      height : '',
    }
  }
  
  render() {
    function onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    }
    return (
      <div className="content-wrapper body-bg pd-top-20 pd-lr-40 min-height-page ">
        <section className="content-header">
          <HotBook/>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row pd-bottom-20">
            <div className="col-md-2" style={{ width: '170px'}}>
              <h4 className="mg-all-0 font-600 text-color-light">
                <Icon type="book" style={{  paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Truyện mới 
              </h4>
            </div>
          </div>
          <FilterHomePage/>
          <div className="pd-top-10">
            <ListBook/>
          </div>
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
              pageSizeOptions={['50', '100', '150', '200']}
            />
          </div>
        </section>
        <div>
          <BackTop />
          <strong style={{ color: '#000' }}></strong>
        </div>
      </div>
    )
  }
}

export default HomeBody;