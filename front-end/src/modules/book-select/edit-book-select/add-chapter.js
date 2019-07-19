import React, { Component } from 'react';
import {Button, Icon, Modal} from 'antd';
import {connect} from 'react-redux';
import {UPDATE_BOOK,} from './../../../redux/action/admin/create-book-action';
import { GET_BOOK_DETAIL} from './../../../redux/action/admin/book-actions';
import ReactUploadImage from './../../create-book/create-book-body/upload-image'

class AddChapter extends Component {
  state = { visible: false, data_SV1:[], name:'' };

  showModal = () => {
    this.props.bookDetailStore(this.props.id)
    this.setState({
      visible: true,
      data_SV1: this.props.bookData.data_SV1,
      name: this.props.bookData.name,
      chapter_name: '',
      newChapter: {},
      book_id: this.props.bookData.book_id
    });
  };
  data_SV1 = e => {
    let newChapter = {
      created_at: new Date(),
      chapter_number: this.state.data_SV1.length,
      chapter_name: this.state.chapter_name,
      image: e
    }
    this.setState({newChapter : newChapter})
  }
  chapter_name = e => {
    const { value } = e.target;
    this.setState({chapter_name : value})
  }

  handleOk = e => {
    let _data = this.state.data_SV1
    _data.push(this.state.newChapter)
    let obj = {
      book_id : this.state.book_id,
      data_SV1 : _data
    }
    this.props.updateBook(obj)
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render() {
    let titleModal = "Thêm chương " + this.state.data_SV1.length + ' truyện ' + this.state.name
    return (
      <div className="float-right">
        <Button onClick={this.showModal}><Icon type="plus" /> Thêm chương</Button>
        <Modal
          width={950}
          title={titleModal}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form className="form-inline mg-top-20">
            <label className="text-modal font-700">Tên chương</label>
            <input onChange={this.chapter_name} value={this.state.chapter_name} type="text" className="form-control input-modal float-right"  />
          </form>
          <div className="row mg-all-0 pd-top-20" style={{ minHeight:'260px'}}>
            <div className="col-md-3 text-modal pd-all-0 mg-top-10 font-700">Chương 0</div>
            <div className="col-md-9 content-upload">
              <ReactUploadImage data_SV1={this.data_SV1}/>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddChapter);