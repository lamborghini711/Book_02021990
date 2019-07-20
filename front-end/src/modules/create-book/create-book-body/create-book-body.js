import React, { Component } from 'react';
import ReactUploadImage from './upload-image';
import { Input, Button, notification, Select } from 'antd';
import {connect} from 'react-redux';
import {CREATE_BOOK} from './../../../redux/action/admin/create-book-action';
import _ from 'lodash'
const { Option } = Select;


const { TextArea } = Input;
let origin_state = {}
class CreateBookBody extends Component {
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
    name: '',
    another_name: '',
    country:'',
    author: '',
    book_appoint: false,
    cover: '',
    data: [],
    chapter_name: '',
    full_text_search: '',
    translate: '',
    year: '',
    content: '',
    reset: false,
  };
  
  name = e => {
    const { value } = e.target;
    this.setState({name : value,})
  }
  another_name = e => {
    const { value } = e.target;
    this.setState({another_name : value})
  }
  country = e => {
    const { value } = e.target;
    this.setState({country : value})
  }
  year = e => {
    const { value } = e.target;
    this.setState({year : value})
  }
  author = e => {
    const { value } = e.target;
    this.setState({author : value})
  }
  book_appoint = e => {
    const value = e.target.checked;
    this.setState({book_appoint : value})
  }
  cover = e => {
    if(e.length > 0){
      const value = e;
      this.setState({cover : value})
    }
  }
  content = e => {
    const { value } = e.target;
    this.setState({content : value})
  }
  data_SV1 = e => {
    const value = e;
    this.setState({data : value})
  }
  chapter_name = e => {
    const { value } = e.target;
    this.setState({chapter_name : value})
  }
  tag = e => {
    this.setState({tags : e})
  }
  translate = e => {
    const { value } = e.target;
    this.setState({translate : value})
  }
  create = e => {
    let fullText = this.state.name + ' ' + this.state.another_name + ' ' + this.state.tags + ' ' + this.state.author + ' ' + this.state.country;
    let obj = {
      tag : this.state.tags,
      name : this.state.name,
      another_name : this.state.another_name,
      country : this.state.country,
      author : this.state.author,
      book_hot : this.state.book_hot,
      book_appoint : this.state.book_appoint,
      cover : this.state.cover,
      data_SV1 : [{
        created_at: new Date(),
        chapter_number: 0,
        chapter_name: this.state.chapter_name,
        image : this.state.data,
      }],
      created_at: new Date(),
      updated_at: new Date(),
      full_text_search: to_slug(fullText),
      translate: this.state.translate,
      content: this.state.content,
      year: this.state.year,

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
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
      // xoa dau ,
      str = str.replace(/(,)/g, ' ');
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
      // return
      return str;
    }
    this.props.createBook(obj);
    this.setState(origin_state) 
    this.setState({
      reset: true,
      tags: [],
      inputVisible: false,
      inputValue: '',
      name: '',
      another_name: '',
      country:'',
      author: '',
      book_appoint: false,
      cover: '',
      data: [],
      chapter_name: '',
      full_text_search: '',
      translate: '',
      year: '',
      content: '',
    });
  }

  componentDidMount(){
    origin_state = _.cloneDeep(this.state)
  }

  render() {
    let disableBtn = true;
    if(this.props.response.createBook.status) {
      notification.open({
        message: 'Tạo thành công',
        description:
          `Chúc mừng bạn đã tạo truyện '${this.props.response.createBook.data.name}' thành công`,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
    if(this.state.name && this.state.cover && this.state.tags.length>0 ){
      disableBtn = false
    }
    return (
      <div className="content-wrapper min-height-page  ">
        <div className="create-title pd-all-30">Tạo truyện tranh mới</div>
        <div className="mg-0-auto pd-tb-10" style={{width:'900px'}}>
          <form className="form-inline">
            <label className="text-style font-700 text-color-primary">Tên truyện (*)</label>
            <input onChange={this.name} value={this.state.name} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tên khác</label>
            <input onChange={this.another_name} value={this.state.another_name} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Country</label>
            <input onChange={this.country} value={this.state.country} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Năm</label>
            <input onChange={this.year} value={this.state.year} type="number" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tác giả</label>
            <input onChange={this.author} value={this.state.author} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Nhóm dịch</label>
            <input onChange={this.translate} value={this.state.translate} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20 ">
            <label className="checkbox-inline text-style pd-all-0 font-700">Truyện đề cử</label>
            <label className="container-create">
              <input onChange={this.book_appoint} value={this.state.book_appoint} type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          {/* start tag */}
          <form className="form-inline mg-top-20 mg-bottom-20">
            <label className="text-style font-700 text-color-primary">Thể loại (*)</label>
            <div className="inline" style={{ marginBottom: 16 }}>
            <Select
              mode="multiple"
              style={{ width: '740px' }}
              placeholder="Vui lòng chọn"
              onChange={this.tag}
              value={this.state.tags}
            >
              <Option value="Action">Action</Option>
              <Option value="Adventure">Adventure</Option>
              <Option value="Aldult">Aldult</Option>
              <Option value="Manhua">Manhua</Option>
              <Option value="Anime">Anime</Option>
              <Option value="Chuyển sinh">Chuyển sinh</Option>
              <Option value="Comic">Comic</Option>
              <Option value="Lịch sử">Lịch sử</Option>
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Ngôn tình">Ngôn tình</Option>
              <Option value="Romance">Romance</Option>
              <Option value="School life">School life</Option>
              <Option value="Trinh thám">Trinh thám</Option>
              <Option value="Xuyên không">Xuyên không</Option>
              <Option value="Ecchi">Ecchi</Option>
              <Option value="Magic">Magic</Option>
              <Option value="Drama">Drama</Option>
              <Option value="18+">18+</Option>
              <Option value="16+">16+</Option>

            </Select>
            </div>
          </form>
          {/* end tag */}
          <div className="row mg-top-20 mg-all-0" style={{borderTop: '1px solid #272727', borderBottom: '1px solid #272727', padding:'20px 0'}}>
            <div className="col-md-3 text-style pd-all-0 mg-top-10 font-700 text-color-primary">Ảnh bìa (*)</div>
            <div className="col-md-9 inline content-upload">
              <ReactUploadImage cover={this.cover} reset={this.state.reset}/>
            </div>
          </div>
          <br/>
          <form className="form-inline mg-bottom-20">
            <label className="text-style pd-all-0 font-700">Nội dung truyện</label>
            <TextArea onChange={this.content} value={this.state.content} rows={4} />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tên chương</label>
            <input onChange={this.chapter_name} value={this.state.chapter_name} type="text" className="form-control input-style float-right"  />
          </form>
          <div className="row mg-all-0" style={{ padding:'20px 0'}}>
            <div className="col-md-3 text-style pd-all-0 mg-top-10 font-700">Chương 0</div>
            <div className="col-md-9 content-upload">
              <ReactUploadImage data_SV1={this.data_SV1} reset={this.state.reset}/>
            </div>
          </div>
          <div className="text-right">
            <Button  style={{margin:'60px 0 50px 0'}} onClick={this.create} disabled={disableBtn}>
              Tạo truyện
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    response: state.createBook
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBook: (obj) => {
      dispatch({ type: CREATE_BOOK, obj })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookBody);