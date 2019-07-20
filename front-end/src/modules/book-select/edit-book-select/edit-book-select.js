import React, { Component } from 'react';
import { Modal, Button, Icon, Select, Input } from 'antd';
import ReactUploadImage from './../../create-book/create-book-body/upload-image';
import {connect} from 'react-redux';
import {UPDATE_BOOK,} from './../../../redux/action/admin/create-book-action';
import { GET_BOOK_DETAIL} from './../../../redux/action/admin/book-actions';
const { Option } = Select;
const { TextArea } = Input;
class EditBookSelect extends Component {
  state = { 
    visible: false,
    tag: [],
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
    book_id: 0,
    status: false,
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
  chapter_name = e => {
    const { value } = e.target;
    this.setState({chapter_name : value})
  }
  tag = e => {
    this.setState({tag : e})
  }
  translate = e => {
    const { value } = e.target;
    this.setState({translate : value})
  }
  status = e => {
    const value = e.target.checked;
    this.setState({status : value})
  }
  showModal = () => {
    this.props.bookDetailStore(this.props.id)
    let e = this.props.bookData
    let cover = []
    cover.push({src:e.cover})
    this.setState({
      tag: e.tag,
      name : e.name,
      another_name : e.another_name,
      country :e.country,
      author : e.author,
      book_appoint : e.book_appoint,
      cover:cover,
      translate :e.translate,
      year : e.year,
      content : e.content,
      book_id: e.book_id,
      status: e.status,
      visible: true,
    })
  };

  handleOk = e => {
    this.setState({
      visible: false,
      book_id : this.state.book_id,
    });
    let fullText = this.state.name + ' ' + this.state.another_name + ' ' + this.state.tag + ' ' + this.state.author + ' ' + this.state.country;
    let obj = {
      tag : this.state.tag,
      name : this.state.name,
      another_name : this.state.another_name,
      country : this.state.country,
      author : this.state.author,
      book_hot : this.state.book_hot,
      book_appoint : this.state.book_appoint,
      cover : this.state.cover,
      created_at: new Date(),
      updated_at: new Date(),
      full_text_search: to_slug(fullText),
      translate: this.state.translate,
      content: this.state.content,
      book_id: this.state.book_id,
      status: this.state.status,
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
    this.props.updateBook(obj);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let titleModal = 'Chỉnh sửa truyện: ' + this.state.name;
    return (
      <div  className="float-right">
        <span><Button onClick={this.showModal} ><Icon type="setting" /> Chỉnh sửa</Button></span>
        <Modal
          width={1000}
          title={titleModal}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
           <div className="mg-0-auto pd-tb-10" style={{width:'900px'}}>
          <form className="form-inline">
            <label className="text-modal font-700 text-color-primary">Tên truyện (*)</label>
            <input onChange={this.name} value={this.state.name} type="text" className="form-control input-modal float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-modal font-700">Tên khác</label>
            <input onChange={this.another_name} value={this.state.another_name} type="text" className="form-control input-modal float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-modal font-700">Country</label>
            <input onChange={this.country} value={this.state.country} type="text" className="form-control input-modal float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-modal font-700">Năm</label>
            <input onChange={this.year} value={this.state.year} type="number" className="form-control input-modal float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-modal font-700">Tác giả</label>
            <input onChange={this.author} value={this.state.author} type="text" className="form-control input-modal float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-modal font-700">Nhóm dịch</label>
            <input onChange={this.translate} value={this.state.translate} type="text" className="form-control input-modal float-right"  />
          </form>
          <form className="form-inline mg-top-20 ">
            <label className="checkbox-inline text-modal pd-all-0 font-700">Truyện đề cử</label>
            <label className="container-create">
              <input onChange={this.book_appoint} checked={this.state.book_appoint} type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          <form className="form-inline mg-top-20 ">
            <label className="checkbox-inline text-modal pd-all-0 font-700">Trạng thái hoàn tất</label>
            <label className="container-create">
              <input onChange={this.status} checked={this.state.status} type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          {/* start tag */}
          <form className="form-inline mg-top-20 mg-bottom-20">
            <label className="text-modal font-700 text-color-primary">Thể loại (*)</label>
            <div className="inline modal-select" style={{ marginBottom: 16 }}>
            <Select
              mode="multiple"
              style={{ width: '740px' }}
              placeholder="Vui lòng chọn"
              onChange={this.tag}
              // value={tags}
              defaultValue={this.state.tag}
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
          <div className="row mg-top-20 mg-all-0" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding:'20px 0'}}>
            <div className="col-md-3 text-modal pd-all-0 mg-top-10 font-700 text-color-primary">Ảnh bìa (*)</div>
            <div className="col-md-9 inline content-upload">
              <ReactUploadImage cover={this.cover}/>
            </div>
          </div>
          <br/>
          <form className="mg-bottom-20">
            <label className="text-modal pd-all-0 font-700">Nội dung truyện</label>
            <TextArea onChange={this.content} value={this.state.content} rows={4} />
          </form>
        </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.bookDetail.bookData.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBook: (obj) => {
      dispatch({ type: UPDATE_BOOK, obj })
    },
    bookDetailStore: (filter) => {
      dispatch({ type : GET_BOOK_DETAIL, filter})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditBookSelect);