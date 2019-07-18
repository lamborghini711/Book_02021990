import React, { Component } from 'react';
import { Affix, Button, Icon, Select } from 'antd';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {GET_BOOK_DETAIL_CHAPTER_SELECT} from './../../../redux/action/admin/book-actions';
import history from './../../history'

const { Option } = Select;

class DetailBody extends Component {
  state={
    chapter : 0,
  }
  componentDidMount() {
    this.setState({chapter : parseInt(this.props.param.chapter)})
    this.props.chapterSelect(this.props.param.id, this.props.param.chapter)
  }

  handleChange = e => {
    let val = parseInt(e)
    this.props.chapterSelect(this.props.param.id, e)
    this.setState({chapter: e})
    history.push("/chuong-" + val + '-' + this.props.param.slug + "." + this.props.param.id);
  }
  handlePre = e => {
    let val = parseInt(this.state.chapter) - 1;
    this.setState({chapter:val})
    this.props.chapterSelect(this.props.param.id, val)
    history.push("/chuong-" + val + '-' + this.props.param.slug + "." + this.props.param.id);

  }
  handleNext = e => {
    let val = parseInt(this.state.chapter) + 1;
    this.setState({chapter:val})
    this.props.chapterSelect(this.props.param.id, val)
    history.push("/chuong-" + val + '-' + this.props.param.slug + "." + this.props.param.id);
  }

  render() {
  var listImg = [];
  var children = [];
  var lastScrollTop = 0;
  var disNext = false;
  if(this.props.data) {
    for (let j = 0; j < this.props.data.data_SV1.length; j++) {
      children.push(<Option key={j}>{'Chương ' + j}</Option>);
    }
  }

  if(this.props.chapterSelectData.data) {
  let item = this.props.chapterSelectData.data;
    let data = item[0];
    for (let i = 0; i< data.image.length; i++) {
      let item = data.image[i].src;
      listImg.push(
        <div key={i}>
          <img className='width-720' src={item} alt="a"/>
        </div>
      )
    }
    if(this.props.data) {
      if((this.props.data.data_SV1.length-1) <= data.chapter_number){
        disNext = true
      }
    }
  }

  // or window.addEventListener("scroll"....
  window.addEventListener("scroll", function(){ 
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let a = document.documentElement.scrollTop
    if(document.getElementById("tuan") && a > 215){
      var element = document.getElementById("tuan");
      if (st > lastScrollTop){
        element.classList.add("scroll-down");
        element.classList.remove("scroll-up");
      } else {
        element.classList.remove("scroll-down");
        element.classList.add("scroll-up");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
  }, false);

  let disPre = false;
  if(parseInt(this.state.chapter) === 0){
    disPre = true
  }
  return (
      <div className='width-720 mg-0-auto '>
        <div style={{marginTop:'20px'}} >
          <Affix offsetTop={50}>
            <div className='text-center light scroll-to-fixed-fixed width-720' id="tuan" >
              <Link to="/">
                <Icon className='mg-right-10 text-left' style={{fontSize:'20px', color:'#121212'}} type="home" theme="filled" />
              </Link>
              {/* <Icon className='mg-right-10' style={{fontSize:'20px', color:'#121212'}} type="redo" /> */}
              <Button onClick={this.handlePre}  hidden={disPre} className='mg-right-10' shape="circle" icon="arrow-left" />
              <Select value={'Chương ' + this.state.chapter} size='default' defaultValue={'Chương ' + this.state.chapter} onChange={this.handleChange} style={{ width: 200, marginRight:'10px' }}>
                {children}
              </Select>
              <Button hidden={disNext} onClick={this.handleNext} className='mg-right-10' shape="circle" icon="arrow-right" />
            </div>
          </Affix>
        </div>
        {listImg}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chapterSelectData: state.bookDetail.chapterSelect
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    chapterSelect: (filter, chapter) => {
      dispatch({ type : GET_BOOK_DETAIL_CHAPTER_SELECT, filter, chapter })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBody);