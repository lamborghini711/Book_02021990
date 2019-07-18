import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Badge, Icon, Pagination } from 'antd';
import {connect} from 'react-redux';
const { Meta } = Card;

class ListBook extends Component {
  state = {
    page : 1
  }

  onChange = e => {
    this.props.paniga(e)
  }
  render() {
    // console.log(this.state.page)
    var listBook = [];
    var total = 0;
    if (this.props.bookData) {
      total = this.props.bookData.total;
      var items = this.props.bookData.items;
      var limit = items.length;
      for(let i=0 ; i<limit; i++) {
        listBook.push(
          <div className="col-card" key={i}>
            <Link to={"/truyen-" + to_slug(items[i].name) + "." + items[i].book_id}>
              <Badge count={items[i].last_chapter}>
                <Card
                  cover={
                    <img className="border-radius-10 thumb-cover"  alt={items[i].name} src={items[i].cover} />
                  }
                >
                  <Meta title={items[i].name} />
                </Card>
              </Badge>
            </Link>
            <div className="row response mg-all-0">
              <div className="col-md-2 text-color-primary pd-all-0">
                <Icon type="heart" theme="filled" />
              </div>
              <div className="col-md-2 text-color-grey pd-all-0" >
                <Icon type="star" theme="filled" />
              </div>
              <div className="col-md-8 text-right text-color-grey pd-all-0" >
                <Icon type="eye" theme="filled" />
              <span className="font-11 pd-left-5">{items[i].read}</span>
              </div>
            </div>
          </div>
        )
      }
      function to_slug(str){
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
      }
    }
   
    return (
      <div>
        <div className="row pd-bottom-20 pd-top-10 response">
          <div className="col-md-3 response" >
            <h4 className="mg-all-0 font-600 text-color-light">
              <Icon type="book" style={{  paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Truyện mới cập nhật
            </h4>
          </div>
          <div className="col-md-9 text-right">
          <a href='123'>Xem tất cả</a>
          </div>
        </div>
          <div className="row justify-content-md-center pd-top-10">
            {listBook}
          </div>
          <section className="content-footer">
            <div className="text-center" style={{padding:'10px 0 70px 0'}}>
              <Pagination
                total={total}
                // showTotal={total => `${total} truyện`}
                pageSize={32}
                defaultCurrent={1}
                onChange = {this.onChange}
              />
            </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.listBooks.bookData.data
  }
}

export default connect(mapStateToProps, null)(ListBook);