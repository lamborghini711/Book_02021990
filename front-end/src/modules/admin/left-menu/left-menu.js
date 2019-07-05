import React, { Component } from 'react';
import { Icon } from 'antd';


class LeftMenu extends Component {
  render() {
    return (
      <div>
        {/* Left side column. contains the sidebar */}
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-red active pd-top-10" /> <span>Action</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Adventure</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Adult</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-red active" /> <span>Anime</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Chuyển Sinh</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Comic</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-red active" /> <span>Cổ Đại</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>Drama</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Fantasy</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Ngôn tình</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-red active" /> <span>Romance</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-yellow" /> <span>School Life</span></a></li>
              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-aqua" /> <span>Trinh thám</span></a></li>

              <li><a href="1" className='font-13'><i className="fa fa-circle-o text-yellow pd-bottom-10" /> <span>Xuyên Không</span></a></li>
              
              {/* Truyen dang doc */}
              <li className="header">Truyện đang đọc</li>
              <li>
                <a href="1" style={{height: '55px'}}>
                  <div className='col-md-2' style={{padding:'0px'}}>
                  <img src="/img/thumb/poster_01.jpg" className="img-reading" alt="User" />
                  </div>
                  <div className='col-md-9' style={{padding:'0px 5px', top: '5px'}}>
                    <div style={{fontSize:'11px'}}>Hiệp khách giang hồ </div>
                    <div style={{fontSize:'10px', color:'gray'}}>Chương: 112</div>
                  </div>
                  <div style={{paddingTop:'8px'}} ><Icon type="close" style={{fontSize:'10px'}} /></div>
                </a>
              </li>
              <li>
                <a href="1" style={{height: '55px'}}>
                  <div className='col-md-2' style={{padding:'0px'}}>
                  <img src="/img/thumb/poster_02.jpg" className="img-reading" alt="User" />
                  </div>
                  <div className='col-md-9' style={{padding:'0px 5px', top: '5px'}}>
                    <div style={{fontSize:'11px'}}>Người trong giang hồ</div>
                    <div style={{fontSize:'10px', color:'gray'}}>Chương: 501</div>
                  </div>
                  <div style={{paddingTop:'8px'}} ><Icon type="close" style={{fontSize:'10px'}} /></div>
                </a>
              </li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>

      </div>
    );
  }
}

export default LeftMenu;