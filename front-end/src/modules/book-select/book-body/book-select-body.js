import React, { Component } from 'react';
import BookInfo from '../book-info/book-info';
import BookInfoFooter from '../book-info-footer/book-info-footer';
import { BackTop } from 'antd';

class BookSelectBody extends Component {
  render() {
    return (
      <div className="content-wrapper min-height-page ">
        <div className=" width-720 mg-0-auto">
          <section className="content-header text-center pd-tb-20 mg-top-20">
            <div className='book-title'>Tôi thăng cấp một mình</div>
            <div className="text-color-grey font-13">Cập nhật lúc: 13:35 10/07/1019</div>
          </section>
          <section className="content pd-bottom-30" >
            <BookInfo/>
            <BookInfoFooter/>
          </section>
        </div>
        <div>
          <BackTop />
          <strong style={{ color: '#000' }}></strong>
        </div>
      </div>
    );
  }
}

export default BookSelectBody;