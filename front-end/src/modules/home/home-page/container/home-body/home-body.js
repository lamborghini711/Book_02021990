import React, { Component } from 'react';
import { BackTop } from 'antd';
import ListBook from './../list-book/list-book';
import HotBook from './../hot-book/hot-book';
import TruyenDeCu from '../list-book/truyen-de-cu';
// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
// });
class HomeBody extends Component {
  render() {
    return (
      <div className="content-wrapper body-bg pd-top-20 min-height-page response">
        <section className="content-header width-list-book mg-0-auto">
          <HotBook/>
        </section>
        {/* social media */}
        {/* <div className='social-media'>
          <Button type="danger" shape="round" style={{paddingRight:'15px', backgroundColor:'#4267b2', borderColor: '#4267b2', color:'white'}}>
          <IconFont type="icon-facebook"  style={{paddingRight:'5px'}}/> Share FaceBook
          </Button>
        </div>
        <div className='social-media-2'>
          <Button type="primary" shape="round" style={{paddingRight:'15px'}}>
          <Icon type="mail"  style={{paddingRight:'5px'}} /> Liên hệ
          </Button>
        </div> */}
        {/* Main content */}
        <section className="content width-list-book mg-0-auto" style={{paddingTop: '0px'}}>
            <TruyenDeCu/>
            <ListBook/>
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