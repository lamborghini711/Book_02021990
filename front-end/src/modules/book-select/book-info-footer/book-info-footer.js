import React, { Component } from 'react';
import { Icon, Table } from 'antd';
import {Link} from 'react-router-dom'
import Chat from '../../book-detail/comment/comment';
const moment = require('moment');

class BookInfoFooter extends Component {
  render() {
  let data = [];
  let columns = [
    {
      title: 'Chương',
      dataIndex: 'chapter',
      className: 'column-chapter',
      render: chapter => <Link to={ "/chuong-"+ chapter + "-" + to_slug(book.name) + "." + book.book_id }>Chương {chapter}</Link> ,
    },
    {
      title: 'Tên chương',
      dataIndex: 'name',
    },
    {
      title: 'Ngày đăng',
      className: 'column-date',
      dataIndex: 'date',
    }
  ];
  if (this.props.data) {
    var book = this.props.data
    let item = this.props.data.data_SV1;
    for(let i=0 ; i < item.length; i++) {
      var chapter = item[i].chapter_number;
      var name = item[i].chapter_name;
      var date = moment(item[i].created_at).format('DD-MM-YYYY');
      data.push(
        {
          key: i,
          chapter: chapter,
          name: name,
          date: date,
        }
      )
    }
  }

  function to_slug(str){
    str = str.toLowerCase();     
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
  }
  
    return (
      <div className="row pd-top-10">
        <h3 className="text-600 pd-bottom-10">
          <Icon type="security-scan" style={{paddingRight:'10px'}} />Danh sách chương
        </h3>
        <div style={{backgroundColor:"#fff", borderRadius:'5px', padding:'5px'}}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 350 }}
          />
        </div>
        <div style={{backgroundColor:"#fff", marginTop:'20px', borderRadius:'5px'}}>
          <Chat/>
        </div>
      </div>
    );
  }
}

export default BookInfoFooter;