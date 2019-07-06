import React, { Component } from 'react';
import { Button } from 'antd';

class DetailHeader extends Component {
 
  render() {
    return (
      <div>
        <div>
          <span className='book-title'>Tôi thăng cấp một mình | </span>
          <span>Chapter 0</span>
          <span className="text-color-grey float-right">Cập nhật lúc: 13:35 10/07/1019</span>
        </div>
        <div className="text-center pd-top-30">
          <div>
            Nếu không xem được truyện vui lòng đổi "SERVER ẢNH" bên dưới
          </div>
          <div className="pd-top-10">
            <Button type='primary' className='mg-right-10'>Sever 1</Button>
            <Button type='default' className='mg-right-10'>Sever 2</Button>
            <Button type='default' className='mg-right-10'>Sever 3</Button>
            <Button type='default' className='mg-right-10'>Sever 4</Button>
          </div>
          <div className="pd-top-10">
            Nếu vẫn không đọc được truyện, hoặc truyện chưa được dịch, up không đúng truyện, vui lòng 
            <a href="a"> bình luận </a>
            bên dưới hoặc nhấn
            <a href="a"> Báo lỗi </a>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default DetailHeader;