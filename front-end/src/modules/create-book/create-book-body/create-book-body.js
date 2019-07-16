import React, { Component } from 'react';
import ReactUploadImage from './upload-image';
import { Tag, Input, Icon, Button, notification } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import {connect} from 'react-redux';
import {CREATE_BOOK} from './../../../redux/action/admin/create-book-action';
import _ from 'lodash'

const { TextArea } = Input;
let origin_state = {}
class CreateBookBody extends Component {
  //=========================== start tag =================================//
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
    name: '',
    another_name: '',
    country:'',
    author: '',
    book_hot: false,
    book_appoint: false,
    cover: '',
    data: [],
    chapter_name: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  //=========================== end tag =================================//

  name = e => {
    const { value } = e.target;
    this.setState({name : value})
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
  book_hot = e => {
    const value  = e.target.checked;
    this.setState({book_hot : value})
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
  create = e => {
    let obj = {
      tags : this.state.tags,
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
    }
    this.props.createBook(obj);
    this.setState(origin_state) 
  }

  componentDidMount(){
    origin_state = _.cloneDeep(this.state)
  }
  componentWillReceiveProps(){
    debugger
    if(this.props.response.status === 201) {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);
    
    return (
      <div className="content-wrapper min-height-page  ">
        <div className="create-title pd-all-30">Tạo truyện tranh mới</div>
        <div className="mg-0-auto pd-tb-10" style={{width:'900px'}}>
          <form className="form-inline">
            <label className="text-style font-700">Tên truyện</label>
            <input onChange={this.name} value={this.state.name} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tên khác</label>
            <input onChange={this.another_name} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Country</label>
            <input onChange={this.country} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Năm</label>
            <input onChange={this.year} type="number" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tác giả</label>
            <input onChange={this.author} type="text" className="form-control input-style float-right"  />
          </form>
          <form className="form-inline mg-top-20">
            <label className="checkbox-inline text-style pd-all-0 font-700">Truyện hot</label>
            <label className="container-create">
              <input onChange={this.book_hot} type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          <form className="form-inline mg-top-20 ">
            <label className="checkbox-inline text-style pd-all-0 font-700">Truyện đề cử</label>
            <label className="container-create">
              <input onChange={this.book_appoint} type="checkbox" />
              <span className="checkmark" />
            </label>
          </form>
          {/* start tag */}
          <form className="form-inline mg-top-20 mg-bottom-20">
            <label className="text-style font-700">Thể loại</label>
            <div className="inline" style={{ marginBottom: 16 }}>
              <TweenOneGroup
                enter={{
                  scale: 0.8,
                  opacity: 0,
                  type: 'from',
                  duration: 100,
                  onComplete: e => {
                    e.target.style = '';
                  },
                }}
                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                appear={false}
              >
                {tagChild}
              </TweenOneGroup>
            </div>
            {inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 100 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag onClick={this.showInput} style={{ background: '#272727', color:'#cdcdcd', border: '1px dashed #636363', cursor: 'pointer' }}>
                <Icon type="plus" /> Tạo Tag
              </Tag>
            )}
          </form>
          {/* end tag */}
          <div className="row mg-top-20 mg-all-0" style={{borderTop: '1px solid #272727', borderBottom: '1px solid #272727', height:'260px', paddingTop:'20px'}}>
            <div className="col-md-3 text-style pd-all-0 mg-top-10 font-700">Ảnh bìa</div>
            <div className="col-md-9 inline content-upload">
              <ReactUploadImage cover={this.cover}/>
            </div>
          </div>
          <br/>
          <form className="form-inline mg-bottom-20">
            <label className="text-style pd-all-0 font-700">Nội dung truyện</label>
            <TextArea onChange={this.content} rows={4} />
          </form>
          <form className="form-inline mg-top-20">
            <label className="text-style font-700">Tên chương</label>
            <input onChange={this.chapter_name} type="text" className="form-control input-style float-right"  />
          </form>
          <div className="row mg-all-0 pd-top-20" style={{ minHeight:'260px'}}>
            <div className="col-md-3 text-style pd-all-0 mg-top-10 font-700">Chương 0</div>
            <div className="col-md-9 content-upload">
              <ReactUploadImage data_SV1={this.data_SV1}/>
            </div>
          </div>
          <div className="text-right">
            <Button  style={{margin:'60px 0 50px 0'}} onClick={this.create}>
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
    response: state.createBook.createBook
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