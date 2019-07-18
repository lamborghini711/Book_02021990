import React, { Component } from 'react';
import { Icon } from 'antd';
import {Link} from 'react-router-dom'


class LeftMenu extends Component {
  state={
    active:'',
  }
  render() {
    // function to_slug(str){
    //   str = str.toLowerCase();     
    //   str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    //   str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    //   str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    //   str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    //   str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    //   str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    //   str = str.replace(/(đ)/g, 'd');
    //   str = str.replace(/([^0-9a-z-\s])/g, '');
    //   str = str.replace(/(\s+)/g, '-');
    //   str = str.replace(/^-+/g, '');
    //   str = str.replace(/-+$/g, '');
    //   return str;
    // }
    return (
      <div>
        <aside className="main-sidebar slimScrollDiv">
          <section className="sidebar ">
            <ul className="sidebar-menu" data-widget="tree">

              <li className="header">Xếp hạng</li>
              <li className=""><Link to={"topic-top-all"} className='font-13'><i className="fa fa-calendar-o text-aqua" /> <span>Top all</span></Link></li>
              <li><Link to="topic-top-thang" className='font-13'><i className="fa fa-calendar-o" /> <span>Top tháng</span></Link></li>
              <li><Link to="topic-top-tuan" className='font-13'><i className="fa fa-calendar-o text-yellow" /> <span>Top tuần</span></Link></li>
              <li><Link to="topic-truyen-da-hoan-tat" className='font-13'><i className="fa fa-check" /> <span>Truyện đã hoàn tất</span></Link></li>
              <li><Link to="topic-top-yeu-thich" className='font-13'><i className="fa fa-heart-o text-red" /> <span>Top yêu thích</span></Link></li>
              <li className="mg-bottom-10"><Link to="topic-top-moi-cap-nhat" className='font-13'><i className="fa fa-plus-square-o" /> <span>Top mới cập nhật</span></Link></li>

              <li className="header">THỂ LOẠI</li>
              <li><Link to={"topic-Action"} className='font-13'><i className="fa fa-circle-o text-red active" /> <span>Action</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Adventure</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Adult</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-red" /> <span>Anime</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Chuyển Sinh</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Comic</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-light" /> <span>Cổ Đại</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Drama</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Fantasy</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o" /> <span>Ngôn tình</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-red" /> <span>Romance</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>School Life</span></Link></li>
              <li><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Trinh thám</span></Link></li>
              <li className="mg-bottom-10"><Link to={"topic-action"} className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Xuyên Không</span></Link></li>
              
              {/* Truyen dang doc */}
              <li className="header">Truyện đang đọc</li>
              <li className="mg-bottom-10">
                <a href="1" style={{height: '55px'}}>
                  <div className='col-md-2' style={{padding:'0px'}}>
                  <img src="/img/thumb/poster_01.jpg" className="img-reading" alt="User" />
                  </div>
                  <div className='col-md-9' style={{padding:'0px 5px', top: '5px', width:'68%'}}>
                    <div style={{fontSize:'11px'}}>Hiệp khách giang hồ </div>
                    <div style={{fontSize:'10px', color:'gray'}}>Chương: 112</div>
                  </div>
                  <div className='col-md-1' style={{paddingTop:'8px'}} ><Icon type="close" style={{fontSize:'10px'}} /></div>
                </a>
              </li>
              
              <li className="header"></li>
              <li>
                <div className="text-footer">
                  Copyright © 2019. Comic
                </div>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    );
  }
}

export default LeftMenu;