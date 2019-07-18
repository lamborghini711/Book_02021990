import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Badge, Icon, Pagination } from 'antd';
// import FilterHomePage from '../filter-home-page/filter-home-page';
import {connect} from 'react-redux';
import {GET_LIST_TOPIC} from './../../../redux/action/admin/book-actions'
const { Meta } = Card;

class BodyTopic extends Component {
  state = {
    page : 1,
    nameTopic : '',
    oldTopic : ''
  }

  componentDidUpdate(){
    let val = this.props.param.params.slug;
    if(this.state.oldTopic !== val) {
      let filter = ''
      switch(val){
        case'top-all':
          filter = 'top-all'
          this.setState({nameTopic:'Top All', oldTopic:'top-all'})
          break;
        case'top-thang':
          filter = 'top-thang'
          this.setState({nameTopic:'Top Tháng', oldTopic:'top-thang'})
          break;
        case'top-tuan':
          filter = 'top-tuan'
          this.setState({nameTopic:'Top Tuần', oldTopic:'top-tuan'})
          break;
        case'truyen-da-hoan-tat':
          filter = 'top-full'
          this.setState({nameTopic:'Top Truyện đã hoàn tất', oldTopic:'truyen-da-hoan-tat'})
          break;
        case'top-yeu-thich':
          filter = 'top-yeu-thich'
          this.setState({nameTopic:'Top Truyện yêu thích', oldTopic:'top-yeu-thich'})
          break;
        case'top-moi-cap-nhat':
          filter = 'top-moi-cap-nhat'
          this.setState({nameTopic:'Top Truyện mới cập nhật', oldTopic:'top-moi-cap-nhat'})
          break;
        default:
          filter = ''
          break
      }
      this.props.listTopic(filter) // su dung reducer trong store
    }
  }

  onChange = e => {
    // this.props.listTopic(e)
  }
  render() {
    var listBook = [];
    var total = 0;
    if (this.props.listTopicData) {
      total = this.props.listTopicData.total;
      var items = this.props.listTopicData.items;
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
    }
   
    return (
      <div className="content-wrapper body-bg pd-top-20 min-height-page response ">
        <div className=" width-list-book mg-0-auto">
          <div className="row pd-bottom-20 pd-top-10 response ">
            <div className="col-md-3 response pd-top-30" >
              <h4 className="mg-all-0 font-600 text-color-light">
                <Icon type="book" style={{  paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> {this.state.nameTopic}
              </h4>
            </div>
          </div>
            <div className="row justify-content-md-center pd-top-10">
              {listBook}
            </div>
            <section className="content-footer">
              <div className="text-center" style={{padding:'10px 0 70px 0'}}>
                <Pagination
                  total={total}
                  pageSize={48}
                  defaultCurrent={1}
                  onChange = {this.onChange}
                />
              </div>
          </section>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listTopicData: state.listBooks.listTopic.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listTopic: (filter) => {
      dispatch({ type : GET_LIST_TOPIC, filter})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyTopic);