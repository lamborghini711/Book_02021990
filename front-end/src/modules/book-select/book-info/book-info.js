import React, { Component } from 'react';
import { Icon, Tag, Button } from 'antd';
import { Link } from "react-router-dom";

class BookInfo extends Component {
  render() {
    let cover = "";
    let alt = "";
    let content = "";
    let another_name = "";
    let author = "";
    let status = "";
    let view = 0;
    let folow = 0;
    let tag = [];
    let name = "";
    let id = "";
    if (this.props.data) {
      let data = this.props.data;
      cover = this.props.data.cover;
      alt = this.props.data.name;
      content = this.props.data.content;
      another_name = this.props.data.another_name;
      author = this.props.data.author;
      status = this.props.data.status;
      view = this.props.data.read;
      folow = this.props.data.folow;
      let _tag = this.props.data.tag;
      name = to_slug(data.name);
      id = data.book_id.toString();
      for(let i=0 ; i < _tag.length; i++) {
        tag.push(
          <Tag color="#2db7f5" key={i}>{_tag[i]}</Tag>
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
      <div className="row">
        <div className="">
        {/* <Example data={data} /> */}
          <img className="img-info" alt={alt} src={cover} />
        </div>
        <div className="text-center pd-top-30">
          <Link to={ "/chuong-0-" + name + "." + id } style={{paddingRight:'20px'}}>
            <Button type='primary' style={{width:'150px', fontSize:'16px'}}>Xem từ đầu</Button>
          </Link>
          <Link to="/detail">
            <Button type='default' style={{width:'150px', fontSize:'16px'}}>Xem mới nhất</Button>
          </Link>
        </div>
        <h3 className="text-600 pd-top-30">
          <i className="fa fa-bookmark-o pd-right-10" aria-hidden="true"></i>Nội dung:
        </h3>
        <div style={{marginBottom: '20px'}}>
          {content}
        </div>
        <hr/>
        <div style={{marginTop: '20px'}}>
        <div className="row pd-tb-5">
            <div className="col-md-3 info-left"><Icon type="share-alt" style={{paddingRight:'10px'}}  />Tên khác:</div>
              <div className="col-md-9 name-orther">{another_name}</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-3 info-left"><i className="fa fa-user pd-right-10" aria-hidden="true"></i>Tác giả:</div>
              <div className="col-md-9">{author}</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-3 info-left"><Icon type="alipay" style={{paddingRight:'10px'}} />Nhóm dịch:</div>
              <div className="col-md-9">Anime - Manga TV</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-3 info-left"><Icon type="tag" style={{paddingRight:'10px'}} />Thể loại:</div>
              <div className="col-md-9">
                {tag}
               
              </div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-3 info-left"><i className="fa fa-hourglass-start pd-right-10" aria-hidden="true"></i>Trạng thái:</div>
              <div className="col-md-9">{status}</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-3 info-left"><i className="fa fa-eye pd-right-10" aria-hidden="true"></i>Số lượt xem:</div>
              <div className="col-md-9">{view}</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-3 info-left"><i className="fa fa-rss pd-right-10" aria-hidden="true"></i>Theo dõi:</div>
              <div className="col-md-9">{folow}</div>
            </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default BookInfo;