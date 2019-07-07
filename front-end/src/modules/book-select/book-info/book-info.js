import React, { Component } from 'react';
import { Icon, Tag, Button } from 'antd';
import { Link } from "react-router-dom";

class BookInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="">
          <img className="img-info" src="/img/thumb/aHR0cHM6Ly9pbWcuYmxvZ3RydXllbi5jb20vbWFuZ2EvMjAvMjA3MTIvYXZhci5qcGc.jpeg" alt="a"/>
        </div>
        <div className="text-center pd-top-30">
          <Link to="/detail" style={{paddingRight:'20px'} >
            <Button type='primary' style={{width:'150px', fontSize:'16px'}}>Xem từ đầu</Button>
          </Link>
          <Link to="/detail">
            <Button type='default' style={{width:'150px', fontSize:'16px'}}>Xem mới nhất</Button>
          </Link>
        </div>
        <h3 className="text-600 pd-top-30">
          <i className="fa fa-bookmark-o pd-right-10" aria-hidden="true"></i>Nội dung:
        </h3>
        <div>
        Một Manga thể loại siêu anh hùng với đặc trưng phồng tôm đấm phát chết luôn... và mang đậm tính chất troll của tác giả. 
        <br/>
        Onepunch-man là câu chuyện của 1 chàng thanh niên 23 tuổi, đang là một nhân viên văn phòng điển trai nghiêm túc và tất nhiên là ế. 
        Không hiểu vì biến cố gì mà tự nhiên lông tóc trên người của anh trụi lủi, sau đó anh mang trong mình khả năng siêu đặc biệt "Đấm phát chết luôn" 
        nhằm bảo vệ trái đất và thành phố nơi anh sinh sống khỏi các sinh vật ngoài không gian (nhưng phá hoại cũng không kém).
        </div>
        <hr/>
        <div className=''>
        <div className="row pd-tb-5">
            <div className="col-md-2 info-left"><Icon type="share-alt" style={{paddingRight:'10px'}}  />Tên khác:</div>
              <div className="col-md-9 name-orther">Phế Tài Nghịch Thiên: Đặc Công Thần Y</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-2 info-left"><i className="fa fa-user pd-right-10" aria-hidden="true"></i>Tác giả:</div>
              <div className="col-md-9">Từ Anh Tuấn</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-2 info-left"><Icon type="alipay" style={{paddingRight:'10px'}} />Nhóm dịch:</div>
              <div className="col-md-9">Anime - Manga TV</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-2 info-left"><Icon type="tag" style={{paddingRight:'10px'}} />Thể loại:</div>
              <div className="col-md-9">
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
                <Tag color="#f50">#f50</Tag>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-2 info-left"><i className="fa fa-hourglass-start pd-right-10" aria-hidden="true"></i>Trạng thái:</div>
              <div className="col-md-9">Đang tiến hành</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-2 info-left"><i className="fa fa-eye pd-right-10" aria-hidden="true"></i>Số lượt xem:</div>
              <div className="col-md-9">1230</div>
            </div>
            <div className="row pd-tb-5">
              <div className="col-md-2 info-left"><i className="fa fa-rss pd-right-10" aria-hidden="true"></i>Theo dõi:</div>
              <div className="col-md-9">69</div>
            </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default BookInfo;