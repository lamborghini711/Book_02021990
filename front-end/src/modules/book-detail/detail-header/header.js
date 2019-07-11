import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Breadcrumb, Icon } from 'antd';

const routes = [
  {
    path: '/',
    breadcrumbName: <Icon type="home" />,
  },
  {
    path: 'select',
    breadcrumbName: 'Tôi thăng cấp một mình',
  },
  {
    path: 'detail',
    breadcrumbName: 'Chapter 0',
  },
];
function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('>')}>{route.breadcrumbName}</Link>
  );
}

class DetailHeader extends Component {
 
  render() {
    return (
      <div className="resonse-content-header">
       <div className="row">
        <div className="col-md-9">
          <Breadcrumb itemRender={itemRender} routes={routes} />
        </div>
        <div className="col-md-3">
          <span className="text-color-grey float-right">Cập nhật lúc: 13:35 10/07/1019</span>
        </div>
       </div>
       <hr/>
        <div className="text-center">
          <span className='book-title text-color-primary' >Tôi thăng cấp một mình | </span>
          <span>Chapter 0</span>
        </div>
        <div className="text-center pd-top-10">
          <div>
            Nếu không xem được truyện vui lòng đổi "SERVER ẢNH" bên dưới
          </div>
          <div className="pd-top-10">
            <Button type='default' className='mg-right-10'>Sever 1</Button>
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
        {/* <hr/> */}
      </div>
    );
  }
}

export default DetailHeader;